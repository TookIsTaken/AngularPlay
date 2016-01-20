(function () {
    'use strict';


    angular.module('app').directive('baseOcoTriplet', ['tripletCalculations', function (tripletCalc) {
        return {
            restrict: 'E',
            scope: {
                uc: '=',
                qty: '=',
                tc: '=',
                autoCalcOption: '=autoCalculationOption',
                ucDecimals: '=unitCostPrecision',
                tcDecimals: '=totalCostPrecision',
                ucUom: '=unitCostUom',
                tcUom: '=totalCostUom'
            },
            controller: function () {
                this.calc = calculations;


                function calculations() {
                    if (this.autoCalcOption == 1) {
                        calculateTotalCost(this);
                    } else if (this.autoCalcOption == 2) {
                        calculateUnitCost(this);
                    }
                }

                function calculateTotalCost(currentScope) {
                    currentScope.tc = tripletCalc.calculateTotalCost(currentScope.qty, currentScope.uc, currentScope.ucUom, currentScope.tcUom, currentScope.tcDecimals);
                }

                function calculateUnitCost(currentScope) {
                    currentScope.uc = tripletCalc.calculateUnitCost(currentScope.qty, currentScope.tc, currentScope.tcUom, currentScope.ucUom, currentScope.ucDecimals);
                }
            },
            controllerAs: 'standardTrip',
            bindToController: true,
            link: function (scope, element, attrs, standardTrip) {

                scope.$watch('standardTrip.ucUom', function (newValue, oldValue) {
                    if (newValue != oldValue)
                        standardTrip.calc();
                }, true);
                scope.$watch('standardTrip.tcUom', function (newValue, oldValue) {
                    if (newValue != oldValue)
                        standardTrip.calc();
                }, true);

                standardTrip.calc();
            },

            templateUrl: 'app/directives/baseOcoTriplet/base-oco-triplet.html'
        }
    }]);
})();