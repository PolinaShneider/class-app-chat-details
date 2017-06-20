require('../css/main.css');
require("font-awesome-webpack");

var appChat = (function (appChat) {

    appChat.settings = {};

    /**
    * Preparation method
    */
    appChat.init = function (settings) {

        /** Save settings or use defaults */
        for (var set in settings ) {

            this.settings[set] = settings[set] || this.settings[set] || null;

        }

    };



    return appChat;


})({});

/**
* Document ready event listener
* @usage codex.docReady(function(){ # code ... } );
*/
appChat.docReady = function (f) {

    return /in/.test(document.readyState) ? setTimeout(appChat.docReady, 9, f) : f();

};



appChat.time = require('./modules/time');
appChat.helpers = require('./modules/helpers');
appChat.activeDialog = require('./modules/activeDialog');
appChat.messages = require('./modules/messages');
appChat.menuLeft = require('./modules/menuLeft');


module.exports = appChat;


