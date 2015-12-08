(function () {
    'use strict';

    function MainController() {
        this.code = null;

        this.init = function () {
            this.code = [
              { language: 'html', source: '<p>Hello World!</p>' },
              { language: 'css', source: 'p:after { content: "Hello World"; }' },
              { title: 'JS', language: 'javascript', source: 'alert(\'Hello World!\');' },
              { language: 'php', source: '<!--?php echo="Hello World!" ?-->' },
              { language: 'java', source: 'System.out.println("Hello World!");' },
              { title: 'C#', language: 'csharp', source: 'Console.WriteLine("Hello World!");' }
            ];
        }

        this.init();
    }

    angular.module('app').controller('mainController', MainController);

})();