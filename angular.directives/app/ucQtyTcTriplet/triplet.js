(function () {
    'use strict';
    var controllerId = 'triplet';
    angular.module('app').controller(controllerId, ['common', triplet]);

    function triplet(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.costElements = buildPageData();
        vm.yearTotals = buildTotalYears(vm.costElements);
        vm.yearsDisplayed = buildYearsDisplayed();
        vm.autoCalc = 2;
        vm.totalCost = totalCosts;
        vm.ucUom = 2;
        vm.tcUom = 2;
        vm.ucPrecision = 2;
        vm.tcPrecision = 3;
        vm.title = 'Triplet';
        vm.warnings = { 'tripletCheck': false, 'qtyRequired': false, 'ucRequired': false };
        activate();

        function calculateTotal(yearValues) {
            var totalCost = 0;
            yearValues.forEach(function (yearValue) {
                totalCost = totalCost + (yearValue.qty * yearValue.uc);
            })

            return totalCost;
        }

        function totalCosts(year) {
            var totalCost = 0;
            var yearTriplets = this.yearTotals[year];
            yearTriplets.forEach(function (yearTrip) {
                totalCost = totalCost + (yearTrip.qty * yearTrip.uc);
            });
            return totalCost;

            
        }

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Dashboard View'); });
        }       


        function buildPageData() {
            var costElements = {
                elements: []
            };

            costElements.elements.push({ nomen: 'Comp 1', yearValues: [{ fy: 2015, uc: 1.11, qty: 2, tc: 2.22 }, { fy: 2016, uc: 0.11, qty: 2, tc: 0.22 }, { fy: 2017, uc: 0.11, qty: 3, tc: 0.33 }, { fy: 2018, uc: 0.11, qty: 3, tc: 0.33 }, { fy: 2019, uc: 0.11, qty: 3, tc: 0.33 }, { fy: 2020, uc: 0.11, qty: 3, tc: 0.33 }] });
            costElements.elements.push({ nomen: 'Comp 2', yearValues: [{ fy: 2015, uc: 1.11, qty: 2, tc: 2.22 }, { fy: 2016, uc: 0.11, qty: 2, tc: 0.22 }, { fy: 2017, uc: 0.11, qty: 3, tc: 0.33 }] });
            costElements.elements.push({ nomen: 'Comp 3', yearValues: [{ fy: 2015, uc: 1.11, qty: 2, tc: 2.22 }, { fy: 2016, uc: 0.11, qty: 2, tc: 0.22 }, { fy: 2017, uc: 0.11, qty: 3, tc: 0.33 }] });
            costElements.elements.push({ nomen: 'Comp 4', yearValues: [{ fy: 2015, uc: 1.11, qty: 2, tc: 2.22 }, { fy: 2016, uc: 0.11, qty: 2, tc: 0.22 }, { fy: 2017, uc: 0.11, qty: 3, tc: 0.33 }] });


            return costElements;
        }

        function buildTotalYears(costElements) {
            var totalYears = {};
            var years = [];
            var yearTotals = [];
            costElements.elements.forEach(function (element) {
                element.yearValues.forEach(function (yearValue) {
                    if (!totalYears.hasOwnProperty(yearValue.fy)) {
                        totalYears[yearValue.fy] = [];
                    }
                    if (years.indexOf(yearValue.fy) < 0) {
                        years.push(yearValue.fy);
                    }
                    
                    totalYears[yearValue.fy].push(yearValue);
                })
            });

            years.forEach(function (year) {
                yearTotals.push(totalYears[year]);
            })

            return totalYears;
        }
        

        function buildYearsDisplayed() {
            return [2015, 2016, 2017];
        }

        function addWarningsContainer(elements) {
            var warnings = { 'tripletCheck': false, 'qtyRequired': false, 'ucRequired': false };

            elements.elements.forEach(function (element) { element });

            return elements;

        }
    }
})();