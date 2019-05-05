cordova.define("cordova-plugin-x-contacts.Contacts", function(require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cordova_1 = require("cordova");
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.version = "0.0.1";
    }
    Contacts.prototype.getContacts = function () {
        return new Promise(function (resolve, reject) {
            return cordova_1.exec(function (contacts) { return resolve(contacts); }, function (error) { return reject(error); }, "Contacts", "CONTACT:SELECT");
        });
    };
    return Contacts;
}());
module.exports = new Contacts();

});
