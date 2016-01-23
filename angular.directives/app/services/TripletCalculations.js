(function () {
    'use strict';

    var serviceId = 'tripletCalculations';
    angular.module('app').factory(serviceId, ['rounding', tripletCalculations]);

    function tripletCalculations(roundingServ) {
       
        var service = {
            calculateUnitCost: calcUc,
            calculateTotalCost: calcTc
        };

        return service;

        function calcUc(qty, tc, currentTcUom, neededUom, neededPrecision) {
            var uc = roundingServ.unRound(tc, currentTcUom) / qty;
            return roundingServ.round(uc, neededUom, neededPrecision);
        }

        function calcTc(qty, uc, currentUcUom, neededUom, neededPrecision) {
            var tc = roundingServ.unRound(uc, currentUcUom) * qty;
            return roundingServ.round(tc, neededUom, neededPrecision);
        }
    }
})();