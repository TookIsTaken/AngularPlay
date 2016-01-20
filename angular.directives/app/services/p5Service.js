(function () {
    'use strict';

    var serviceId = 'p5Service';
    angular.module('app').factory(serviceId, ['common', P5Service]);

    function P5Service(common) {
        var $q = common.$q;

        var service = {
            getComponents: getComponents,
            getSettings: getP5Settings
        };

        return service;

        function getP5Settings() {
            var settings = { ucUom: 1, tcUom: 2, ucPrecision: 2, tcPrecision: 3, autoCalculation: 1 }

            return $q.when(settings);
        }

        function getComponents() {
            var components = [
                {
                    nomenclature: 'LAP', years: [{ fy: 2015, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 },
                                                        { fy: 2016, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 },
                                                        { fy: 2017, base: true, oco: false, total: false, qty: 2, uc: 3, tc: 6 },
                                                        { fy: 2017, base: false, oco: true, total: false, qty: 2, uc: 3, tc: 6 },
                                                        { fy: 2017, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 }]
                },
                {
                    nomenclature: 'Box 1', years: [{ fy: 2015, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 },
                                                          { fy: 2016, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 },
                                                          { fy: 2017, base: true, oco: false, total: false, qty: 2, uc: 3, tc: 6 },
                                                          { fy: 2017, base: false, oco: true, total: false, qty: 2, uc: 3, tc: 6 },
                                                          { fy: 2017, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 }]
                },
                {
                    nomenclature: 'Power', years: [{ fy: 2015, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 },
                                                          { fy: 2016, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 },
                                                          { fy: 2017, base: true, oco: false, total: false, qty: 2, uc: 3, tc: 6 },
                                                          { fy: 2017, base: false, oco: true, total: false, qty: 2, uc: 3, tc: 6 },
                                                          { fy: 2017, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 }]
                },
                {
                    nomenclature: 'Production Support', years: [{ fy: 2015, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 },
                                                          { fy: 2016, base: false, oco: false, total: true, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: true, oco: false, total: false, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: false, oco: true, total: false, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: false, oco: false, total: true, qty: 0, uc: 0, tc: 6 }]
                },
                {
                    nomenclature: 'Quality Assurance', years: [{ fy: 2015, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 },
                                                          { fy: 2016, base: false, oco: false, total: true, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: true, oco: false, total: false, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: false, oco: true, total: false, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: false, oco: false, total: true, qty: 0, uc: 0, tc: 6 }]
                },
                {
                    nomenclature: 'Engineering Support', years: [{ fy: 2015, base: false, oco: false, total: true, qty: 2, uc: 3, tc: 6 },
                                                          { fy: 2016, base: false, oco: false, total: true, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: true, oco: false, total: false, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: false, oco: true, total: false, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: false, oco: false, total: true, qty: 0, uc: 0, tc: 6 }]
                },
                {
                    nomenclature: 'Study', years: [{ fy: 2015, base: false, oco: false, total: true, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2016, base: false, oco: false, total: true, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: true, oco: false, total: false, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: false, oco: true, total: false, qty: 0, uc: 0, tc: 6 },
                                                          { fy: 2017, base: false, oco: false, total: true, qty: 0, uc: 0, tc: 6 }]
                }
            ];
            return $q.when(components);
        }


        
    }
})();