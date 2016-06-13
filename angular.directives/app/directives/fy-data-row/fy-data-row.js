(function () {
    'use strict';
    var controllerId = 'fyDataRow';
    angular.module('app').controller(controllerId, ['common', '$scope', FyDataRow]);

    function FyDataRow(common, scope, p5Service) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.costElements = [];
        vm.settings = {};
        vm.title = 'FY Table';
        vm.scope = scope;

        activate();


        function calculateFY4() {
            vm.scope.rec.fy4 = vm.scope.rec.fy4Base + vm.scope.rec.fy4Oco;
        }

        function activate() {
            var promises = [getComponents(), getSettings()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Dashboard View'); });
        }


        function getComponents() {
            
        }

        function getSettings() {

        }

    }
})();