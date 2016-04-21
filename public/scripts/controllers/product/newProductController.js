(function(){    
    'use strict';

    angular
        .module('ControllersModule')
        .controller('NewProductController', NewProductController);

    NewProductController.$inject = ['$location', 'ProductService', 'ProductValidatorService',
    'StatusCodeInterpreterService'];
    function NewProductController($location, ProductService, ProductValidatorService, StatusCodeInterpreterService){
        var newProductCtrl = this;

        newProductCtrl.product = {
            name: '',
            quantity: '',
            price: ''
        };
        newProductCtrl.generalMessages = [];
        newProductCtrl.messageName = null;
        newProductCtrl.messageQuantity = null;
        newProductCtrl.messagePrice = null;
        newProductCtrl.validate = validate;
        newProductCtrl.save = save;
        newProductCtrl.reset = reset;

        ////////////

        function validate(value){
            switch(value){
                case 'name':
                    newProductCtrl.messageName = ProductValidatorService.validateName(newProductCtrl.product.name);
                    break;
                case 'quantity':
                    newProductCtrl.messageQuantity = ProductValidatorService.validateQuantity(newProductCtrl.product.quantity);
                    break;
                case 'price':
                    newProductCtrl.messagePrice = ProductValidatorService.validatePrice(newProductCtrl.product.price);
                    break;
            }
        };

        function save(){
            ProductService.save(newProductCtrl.product)
                .then(function (result) {
                    $location.path('/products');

                    StatusCodeInterpreterService.translate(result.status);
                }, function(error){
                    newProductCtrl.generalMessages = error.data;
                });
        };

        function reset(){
            newProductCtrl.product.name = '';
            newProductCtrl.validate('name');
            newProductCtrl.product.quantity = '';
            newProductCtrl.validate('quantity');
            newProductCtrl.product.price = '';
            newProductCtrl.validate('price');
        };
    };
})();