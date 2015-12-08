(function () {
    "use strict";

    var TEMPLATE_PATH = 'App/templates/',
        TEMPLATE_EXTENSION = '.html';

    function setUrl() {
        this.url = TEMPLATE_PATH + this.name + TEMPLATE_EXTENSION;
        return this;
    };

    function MainController() {
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
                }.init(),
                {
                    name: 'javascript1',
                    title: "JS",
                    language: "javascript",
                    init: setUrl
                }.init(),
                {
                    name: 'php1',
                    language: "php",
                    init: setUrl
                }.init(),
                {
                    name: 'java1',
                    language: "java",
                    init: setUrl
                }.init(),
                {
                    name: 'csharp1',
                    title: "C#",
                    language: "csharp",
                    init: setUrl
                }.init()
            ];
        };
        this.init();
    }

    angular.module("app").controller("mainController", MainController);

})();
