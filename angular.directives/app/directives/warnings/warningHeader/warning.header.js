(function () {
    'use strict';


    angular.module('app').directive('warningHeader', [function () {
        return {
            restrict: 'A',
            required: '^warningForm',
            scope: false,
            controller: ['$location', function (location) {
                this.highlightWarning = addBorder;

                function addBorder(id) {
                    var el = document.getElementById(id);
                    el.style.border = '5px solid red';
                    el.scrollIntoView();
                }
            }],
            controllerAs: 'warningHeaderCtrl',
            bindToController: true,
            link: function (scope, element, attrs, warningsCtrl) {
               
            },

            templateUrl: 'app/directives/warnings/warningHeader/warning-header.html'
        }
    }]);
})();