(function() {
    'use strict';


    angular.module('app').directive('standardCostTriplet', function () {
        return {
            restrict: 'E',
            scope: {
                uc: '=',
                qty: '=',
                tc: '=',
                autoCalcOption: '@autoCalculationOption'
            },            
            controller: function () {
                this.calc = calculations;


                function calculations() {
                    if (autoCalcOption === 1) {
                        calculateTotalCost();
                    } else if (autoCalcOption === 2) {
                        calculateUnitCost();
                    }
                }

                function calculateTotalCost() {
                    tc = uc * qty;
                }

                function calculateUnitCost() {
                    uc = round(tc / qty, 2).toFixed(2);
                }

                function round(value, decimals) {
                    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
                }
            },
            controllerAs: 'standardTrip',
            bindToController: true,
            templateUrl: 'app/directives/standardCostTriplet/standard-cost-triplet.html'
        }
    });
})();