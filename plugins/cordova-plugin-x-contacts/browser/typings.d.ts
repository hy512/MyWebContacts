declare module "cordova/platform";
declare module "cordova/exec/proxy";


declare class Contacts {
    readonly version = "0.0.1";
    getContacts(): Promise<Array<string[]>>;
}