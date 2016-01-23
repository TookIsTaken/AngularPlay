(function () {
    'use strict';


    angular.module('app').directive('tripletWarningUc', [function () {
        return {
            restrict: 'A',
            require: ['^tripletWarning', 'ngModel'],
            scope: false,
            link: function (scope, element, attrs, controllers) {
                scope.tripletWarningCtrl = controllers[0];
                scope.modelCtrl = controllers[1];

                scope.$watch(function () { return controllers[1].$modelValue; }, function (newValue, oldValue) {
                    if (newValue != scope.tripletWarningCtrl.uc)
                        scope.tripletWarningCtrl.uc = newValue;
                }, true);
            }
        }
    }]);
})();