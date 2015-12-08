(function() {
    'use strict';

    var codeTabDirective = {
        require: '^codetabs',
        restrict: 'EA',
        transclude: true,
        scope: {
            title: '@',
            language: '@',
            url: '@',
            source: '='
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        template:
          '<div class="codetab-content" ng-class="{active: selected}">' +
          '<div ng-include="url"></div>' +
          //'  <hljs language="{{language | lowercase}}" source="source"></hljs>' +
          '</div>',
        replace: true
    };

    angular.module('app').directive('codetab', function() { return codeTabDirective; });

})();