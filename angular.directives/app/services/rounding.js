(function () {
    'use strict';

    var serviceId = 'rounding';
    angular.module('app').factory(serviceId, [rounding]);

    function rounding() {

        var service = {
            round: roundValue,
            unRound: unRoundValue
        };

        return service;
        
        function round(value, decimals) {
            return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
        }

        //Returns the value in Eaches/Dollars/etc.
        function unRoundValue(val, currentUom) {
            if (currentUom == 1) {
                return val;
            } else if (currentUom == 2) {
                return val * 1000;
            } else if (currentUom == 3) {
                return val * 10000;
            }
        }

        //Takes in an unRounded value and returns in correct UOM
        function roundValue(val, neededUom, precision) {
            var roundBase = 1; //Eaches/Dollars
            if (neededUom == 2) { //Thousands
                roundBase = 1000;
            } else if (neededUom == 3) { //Millions
                roundBase = 10000;
            }

            return addTrailingZeros(round(val / roundBase, precision), precision);
        }

        //Rounding leaves off trailing zeros, this add them back
        function addTrailingZeros(val, precision) {
            return val.toFixed(precision);
        }
    }
})();