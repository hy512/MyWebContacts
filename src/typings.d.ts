declare module "*.css" {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare class Contacts {
    readonly version = "0.0.1";
    getContacts(): Promise<Array<string[]>>;
}

declare const d_c: {
    Contacts: Contacts
};