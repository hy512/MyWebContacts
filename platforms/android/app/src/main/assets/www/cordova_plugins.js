cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-x-contacts.Contacts",
      "file": "plugins/cordova-plugin-x-contacts/www/Contacts.js",
      "pluginId": "cordova-plugin-x-contacts",
      "merges": [
        "d_c.Contacts"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-x-contacts": "0.0.1"
  };
});