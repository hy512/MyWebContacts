cordova.define("cordova-plugin-x-logging.Logger", function(require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cordova_1 = require("cordova");
const SERVICE = "Logger";
class Logger {
    constructor(name) {
        this.name = name;
    }
    log(level, message) {
        return Logger.log(this.name, level, message);
    }
    debug(message) {
        return Logger.log(this.name, "DEBUG", message);
    }
    static log(name, level, message) {
        return new Promise((resolve, reject) => cordova_1.exec(data => resolve(data), error => reject(error), SERVICE, "log", [level, message]));
    }
    static setConfigLocation(uri) {
        return new Promise((resolve, reject) => cordova_1.exec(data => resolve(data), error => reject(error), SERVICE, "setConfigLocation", [uri]));
    }
}
exports.default = Logger;

});
