(function(){    
    'use strict';

    angular
        .module('ServicesModule')
        .factory('ProductValidatorService', ProductValidatorService);

    ProductValidatorService.$inject = ['AssertionConcernService'];
    function ProductValidatorService(AssertionConcernService){
        var productValidatorServiceFactory = {
            validateName: validateName,
            validateQuantity: validateQuantity,
            validatePrice: validatePrice
        };

        return productValidatorServiceFactory;

        ////////////

        function validateName(name){
            if(!AssertionConcernService.assertNotEmpty(name))
                return 'Name is required.';

            if(!AssertionConcernService.assertLength(name, 3, 19))
                return 'Name must be at least 3 characters long and maximum 19 characters long.';

            return '';
        };

        function validateQuantity(quantity){
            if(!AssertionConcernService.assertNotEmpty(quantity))
                return 'Quantity is required.';

            if(!AssertionConcernService.assertIsInteger(quantity))
                return 'Quantity must be a integer.';

            if(!AssertionConcernService.assertLength(quantity, 1, 9))
                return 'Quantity must be at least 1 characters long and maximum 9 characters long.';

            return '';
        };

        function validatePrice(price){
            if(!AssertionConcernService.assertNotEmpty(price))
                return 'Price is required.';

            if(!AssertionConcernService.assertIsPositiveDecimal(price))
                return 'Price must be a positive decimal.';

            if(!AssertionConcernService.assertLength(price, 1, 10))
                return 'Price must be at least 1 characters long and maximum 14 characters long.';

            return '';
        };
    };
})();