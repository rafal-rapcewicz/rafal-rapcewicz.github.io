(function () {
    "use strict";

    function MainController() {
        this.code = null;

        this.init = function () {
            this.code = [
                {
                    url: 'App/templates/html1.html',
                    language: "html"
                },
                {
                    url: 'App/templates/css1.html',
                    language: "css"
                },
                {
                    url: 'App/templates/javascript1.html',
                    title: "JS",
                    language: "javascript"
                },
                {
                    url: 'App/templates/php1.html',
                    language: "php"
                },
                {
                    url: 'App/templates/java1.html',
                    language: "java"
                },
                {
                    url: 'App/templates/csharp1.html',
                    title: "C#",
                    language: "csharp"
                }
            ];
        };
        this.init();
    }

    angular.module("app").controller("mainController", MainController);

})();
