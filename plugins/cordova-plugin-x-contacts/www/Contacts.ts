import { exec } from 'cordova'

class Contacts {
    readonly version = "0.0.1";

    getContacts(): Promise<Array<string[]>> {
        return new Promise((resolve, reject) =>
            exec(
                (contacts: Array<string[]>) => resolve(contacts),
                error => reject(error),
                "Contacts", "CONTACT:SELECT"
            ));
    }
}

export default new Contacts();