
import * as browser from 'cordova/platform'
import *  as proxy from 'cordova/exec/proxy'

// class ContactsProxy {

// }

const instance = {
    "CONTACT:SELECT": function (success, error) {
        window.setTimeout(() => error(new Error("不支持的平台 !")), 0);
    }
}
proxy.add("Contacts", instance);

export default instance;