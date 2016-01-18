(function() {
    'use strict';


    angular.module('app').directive('standardCostTriplet', function () {
        return {
            restrict: 'E',
            scope: {
                uc: '=',
                qty: '=',
                tc: '=',
                autoCalcOption: '&autoCalculationOption',
                ucDecimals: '&unitCostPrecision',
                tcDecimals: '&totalCostPrecision',
                ucUom: '&unitCostUom',
                tcUom: '&totalCostUom'
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
                    currentScope.tc = currentScope.uc * currentScope.qty;
                }

                function calculateUnitCost(currentScope) {
                    currentScope.uc = round(currentScope.tc / currentScope.qty, 2).toFixed(2);
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