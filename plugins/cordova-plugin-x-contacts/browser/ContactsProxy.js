"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proxy = require("cordova/exec/proxy");
// class ContactsProxy {
// }
var instance = {
    "CONTACT:SELECT": function (success, error) {
        window.setTimeout(function () { return error(new Error("不支持的平台 !")); }, 0);
    }
};
proxy.add("Contacts", instance);
module.exports = instance;
