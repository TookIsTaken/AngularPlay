(function () {
    'use strict';
    var controllerId = 'p5';
    angular.module('app').controller(controllerId, ['common', 'p5Service', P5]);

    function P5(common, p5Service) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.costElements = [];
        vm.settings = {};        
        vm.title = 'P5';

        activate();



        function activate() {
            var promises = [getComponents(), getSettings()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Dashboard View'); });
        }


        function getComponents() {
            return p5Service.getComponents().then(function (data) {
                return vm.costElements = data;
            });
        }

        function getSettings() {
            return p5Service.getSettings().then(function (data) {
                return vm.settings = data;
            });
        }

    }
})();