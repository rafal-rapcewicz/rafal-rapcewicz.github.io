(function () {
    "use strict";

    var TEMPLATE_PATH = 'App/templates/',
        TEMPLATE_EXTENSION = '.html';

    function setUrl() {
        this.url = TEMPLATE_PATH + this.name + TEMPLATE_EXTENSION;
        return this;
    };

    function SecoundController() {
        this.code = null;

        this.init = function () {
            this.code = [
                {
                    name: 'html1',                    
                    language: "html",
                    init: setUrl
                }.init(),
                {
                    name: 'css1',
                    language: "css",
                    init: setUrl
                }.init()
            ];
        };
        this.init();
    }

    angular.module("app").controller("secoundController", SecoundController);

})();
