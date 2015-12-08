(function() {
    'use strict';

    var codeTabDirective = {
        require: '^codetabs',
        restrict: 'EA',
        transclude: true,
        scope: {
            title: '@',
            language: '@',
            source: '='
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        template:
          '<div class="codetab-content" ng-class="{active: selected}">' +
          '  <hljs language="{{language | lowercase}}" source="source"><ng-transclude></ng-transclude></hljs>' +
          '</div>',
        replace: true
    };

    angular.module('app').directive('codetab', function() { return codeTabDirective; });

})();