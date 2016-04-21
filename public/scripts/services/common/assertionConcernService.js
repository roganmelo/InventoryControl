(function(){    
    'use strict';

    angular
        .module('ServicesModule')
        .factory('AssertionConcernService', AssertionConcernService);

    AssertionConcernService.$inject = [];
    function AssertionConcernService(){
        var assertionConcernServiceFactory = {
            assertNotEmpty: assertNotEmpty,
            assertLength: assertLength,
            assertIsInteger: assertIsInteger,
            assertIsPositiveDecimal: assertIsPositiveDecimal
        };

        return assertionConcernServiceFactory;

        ////////////

        function assertNotEmpty(stringValue){
            return (stringValue !== '') ? true : false;
        };

        function assertLength(stringValue, minimum, maximum){
            return (stringValue.length >= minimum && stringValue.length <= maximum) ? true : false;
        };

        function assertIsInteger(stringValue){
            return (stringValue.match(/^[0-9]+$/)) ? true : false;
        };

        function assertIsPositiveDecimal(stringValue){
            return (stringValue.match(/^\d*(\.\d+)?$/)) ? true : false;
        };
    };
})();