(function () {
    "use strict";

    var TEMPLATE_PATH = 'App/templates/',
        TEMPLATE_EXTENSION = '.html';

    function Course(name, language, title) {
        this.name = name;
        this.language = language;
        this.title = title;
        this.url = TEMPLATE_PATH + name + TEMPLATE_EXTENSION;
    }

    function MainController($http) {
        var self = this;
        this.code = null;
        this.code2 = null;

        this.init = function () {
            $http.get('App/data/courses.json').success(function (response) {
                self.code = response.first.map(function (x) { return new Course(x.name, x.language, x.title) });
                self.code2 = response.secound.map(function (x) { return new Course(x.name, x.language, x.title) });
            });
        };

        this.init();
    }

    MainController.$inject = ['$http'];

    angular.module("app").controller("mainController", MainController);

})();
