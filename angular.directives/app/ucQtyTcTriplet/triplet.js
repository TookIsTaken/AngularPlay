(function () {
    'use strict';
    var controllerId = 'triplet';
    angular.module('app').controller(controllerId, ['common', triplet]);

    function triplet(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.costElements = buildPageData();
        vm.autoCalc = 2;
        vm.unitCost = 3.45;
        vm.qty = 4;
        vm.tc = 13.80;
        vm.title = 'Triplet';
        vm.performCalculation = calculations;
        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Dashboard View'); });
        }

        function calculations() {
            if (vm.autoCalc === 1) {
                calculateTotalCost();
            } else if (vm.autoCalc === 2) {
                calculateUnitCost();
            }
        }

        function calculateTotalCost() {
            vm.tc = vm.unitCost * vm.qty;
        }

        function calculateUnitCost() {
            vm.unitCost = round(vm.tc / vm.qty, 2).toFixed(2);
        }

        function round(value, decimals) {
            return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
        }


        function buildPageData() {
            var costElements = {
                elements: []
            };

            costElements.elements.push({ nomen: 'Comp 1', yearValues: [{ uc: 1.11, qty: 2, tc: 2.22 }, { uc: 0.11, qty: 2, tc: 0.22 }, { uc: 0.11, qty: 3, tc: 0.33 }] });
            costElements.elements.push({ nomen: 'Comp 2', yearValues: [{ uc: 1.11, qty: 2, tc: 2.22 }, { uc: 0.11, qty: 2, tc: 0.22 }, { uc: 0.11, qty: 3, tc: 0.33 }] });
            costElements.elements.push({ nomen: 'Comp 3', yearValues: [{ uc: 1.11, qty: 2, tc: 2.22 }, { uc: 0.11, qty: 2, tc: 0.22 }, { uc: 0.11, qty: 3, tc: 0.33 }] });
            costElements.elements.push({ nomen: 'Comp 4', yearValues: [{ uc: 1.11, qty: 2, tc: 2.22 }, { uc: 0.11, qty: 2, tc: 0.22 }, { uc: 0.11, qty: 3, tc: 0.33 }] });


            return costElements;
        }
    }
})();