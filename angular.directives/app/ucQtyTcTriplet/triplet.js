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
        vm.ucUom = 2;
        vm.tcUom = 2;
        vm.ucPrecision = 2;
        vm.tcPrecision = 3;
        vm.title = 'Triplet';
        vm.warnings = { 'tripletCheck': false, 'qtyRequired': false, 'ucRequired': false };
        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Dashboard View'); });
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

        function addWarningsContainer(elements) {
            var warnings = { 'tripletCheck': false, 'qtyRequired': false, 'ucRequired': false };

            elements.elements.forEach(function (element) { element });

            return elements;

        }
    }
})();