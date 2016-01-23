(function () {
    'use strict';


    angular.module('app').directive('tripletWarning', [function () {
        return {
            restrict: 'A',
            require: '^warningForm',
            controller: function () {
                this.tripletCheck = tripletCheckPass;


                function tripletCheckPass() {
                    if (isNaN(this.uc) || isNaN(this.qty) || isNaN(this.tc) || this.uc == '' || this.qty == '' || this.uc == 0 || this.qty == 0) {
                        return true;
                    } else {
                        if (this.tc != (this.uc * this.qty)) {
                            return false;
                        }
                    }

                    return true;
                }
            },
            controllerAs: 'tripWarnCtrl',
            bindToController: true,
            link: function (scope, element, attrs, controller) {
                scope.tripWarnCtrl.warningHeaderCtrl = controller;
                scope.tripWarnCtrl.uc = 0.0;
                scope.tripWarnCtrl.qty = 0;
                scope.tripWarnCtrl.tc = 0.0;
                scope.tripWarnCtrl.id = attrs.id;

                scope.$watch('tripWarnCtrl.uc', function (newValue, oldValue) {
                    if (newValue != oldValue)
                        if (!scope.tripWarnCtrl.tripletCheck()) {
                            scope.tripWarnCtrl.warningHeaderCtrl.addWarning(attrs.id, "Triplet Warning (UC: " + scope.tripWarnCtrl.uc + ", Qty: " + scope.tripWarnCtrl.qty + ", TC: " + scope.tripWarnCtrl.tc + ")");
                        } else {
                            scope.tripWarnCtrl.warningHeaderCtrl.removeWarning(attrs.id);
                        }
                }, true);

                scope.$watch('tripWarnCtrl.tc', function (newValue, oldValue) {
                    if (newValue != oldValue)
                        if (!scope.tripWarnCtrl.tripletCheck()) {
                            scope.tripWarnCtrl.warningHeaderCtrl.addWarning(attrs.id, "Triplet Warning (UC: " + scope.tripWarnCtrl.uc + ", Qty: " + scope.tripWarnCtrl.qty + ", TC: " + scope.tripWarnCtrl.tc + ")");
                        } else {
                            scope.tripWarnCtrl.warningHeaderCtrl.removeWarning(attrs.id);
                        }
                }, true);

                scope.$watch('tripWarnCtrl.qty', function (newValue, oldValue) {
                    if (newValue != oldValue)
                        if (!scope.tripWarnCtrl.tripletCheck()) {
                            scope.tripWarnCtrl.warningHeaderCtrl.addWarning(attrs.id, "Triplet Warning (UC: " + scope.tripWarnCtrl.uc + ", Qty: " + scope.tripWarnCtrl.qty + ", TC: " + scope.tripWarnCtrl.tc + ")");
                        } else {
                            scope.tripWarnCtrl.warningHeaderCtrl.removeWarning(attrs.id);
                        }
                }, true);
            }
        }
    }]);
})();