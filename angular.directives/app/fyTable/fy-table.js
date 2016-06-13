(function () {
    'use strict';
    var controllerId = 'fyTable';
    angular.module('app').controller(controllerId, ['common', 'p5Service', FyTable]);

    function FyTable(common, p5Service) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.costElements = [];
        vm.settings = {};
        vm.title = 'FY Table';

        activate();



        function activate() {
            var promises = [getComponents(), getSettings()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Dashboard View'); });
        }


        function getComponents() {
            return p5Service.getFyRecords().then(function (data) {
                return vm.costElements = data;
            });
        }

        function getSettings() {
            
        }

    }
})();