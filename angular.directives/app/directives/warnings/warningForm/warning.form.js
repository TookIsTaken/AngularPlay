(function () {
    'use strict';


    angular.module('app').directive('warningForm', [function () {
        return {
            restrict: 'A',
            controller: ['$filter', function($filter){
                this.warnings = [];
                this.addWarning = addWarning;
                this.removeWarning = removeWarning;

                function addWarning(id, text) {
                    var warningObject =  { id: id, text: text };
                    var warning = $filter('getById')(this.warnings, id);
                    if (warning == null) {
                        this.warnings.push(warningObject);
                    } else {
                        var index = this.warnings.indexOf(warning);
                        this.warnings[index] = warningObject;                        
                    }
                }

                function removeWarning(id){
                    var warning = $filter('getById')(this.warnings, id);
                    if (warning != null) {
                        var index = this.warnings.indexOf(warning);
                        this.warnings.splice(index, 1);
                    }
                }
            }],
            controllerAs: 'warningsCtrl',
            bindToController: true            
        }
    }]);
})();