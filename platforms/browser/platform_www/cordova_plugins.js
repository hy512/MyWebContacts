cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-x-contacts/www/Contacts.js",
        "id": "cordova-plugin-x-contacts.Contacts",
        "pluginId": "cordova-plugin-x-contacts",
        "merges": [
            "d_c.Contacts"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-contacts/browser/ContactsProxy.js",
        "id": "cordova-plugin-x-contacts.ContactsProxy",
        "pluginId": "cordova-plugin-x-contacts",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-x-contacts": "0.0.1"
}
// BOTTOM OF METADATA
});