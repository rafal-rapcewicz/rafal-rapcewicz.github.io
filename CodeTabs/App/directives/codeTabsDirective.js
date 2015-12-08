//http://jsfiddle.net/Wijmo/ywUYQ/
(function() {
    'use strict';

    var codeTabsDirective = {
        restrict: 'EA',
        transclude: true,
        scope: {},
        controller: ['$scope', function ($scope) {
            var tabs = $scope.tabs = [];

            $scope.select = function (tab) {
                angular.forEach(tabs, function (tab) {
                    tab.selected = false;
                });
                tab.selected = true;
            }

            this.addPane = function (tab) {
                if (tabs.length === 0) { $scope.select(tab); }
                tabs.push(tab);
            }
        }],
        template:
          '<div class="codebox">' +
          '  <div class="codetabs-header">' +
          '    <ul>' +
          '      <li ng-repeat="tab in tabs" ng-class="{active: tab.selected}" class="codebox-{{tab.language | lowercase}}">' +
          '        <a href="" ng-click="select(tab)">{{tab.title || (tab.language | uppercase)}}</a>' +
          '      </li>' +
          '    </ul>' +
          '  </div>' +
          '  <div class="codebox-content" ng-transclude></div>' +
          '</div>',
        replace: true
    };

    angular.module('app').directive('codetabs', function() { return codeTabsDirective; });

})();