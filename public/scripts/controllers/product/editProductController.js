(function(){    
    'use strict';

    angular
        .module('ControllersModule')
        .controller('EditProductController', EditProductController);

    EditProductController.$inject = ['$routeParams', '$location', 'ProductService', 'ProductValidatorService',
    'StatusCodeInterpreterService'];
    function EditProductController($routeParams, $location, ProductService, ProductValidatorService, StatusCodeInterpreterService){
        var editProductCtrl = this;

        editProductCtrl.product = {
            id: '',
            name: '',
            quantity: '',
            price: ''
        };
        editProductCtrl.generalMessages = [];
        editProductCtrl.messageName = '';
        editProductCtrl.messageQuantity = '';
        editProductCtrl.messagePrice = '';
        editProductCtrl.validate = validate;
        editProductCtrl.update = update;
        editProductCtrl.reset = reset;

        activate();

        ////////////

        function activate(){
            return ProductService.getById($routeParams.id)
                .then(function(result){
                    editProductCtrl.product = result.data;
                }, function(error){
                    if(error.status === 404)
                        $location.path('/products');

                    StatusCodeInterpreterService.translate(error.status);
                });
        };

        function validate(value){
            switch(value){
                case 'name':
                    editProductCtrl.messageName = ProductValidatorService.validateName(editProductCtrl.product.name);
                    break;
                case 'quantity':
                    editProductCtrl.messageQuantity = ProductValidatorService.validateQuantity(editProductCtrl.product.quantity);
                    break;
                case 'price':
                    editProductCtrl.messagePrice = ProductValidatorService.validatePrice(editProductCtrl.product.price);
                    break;
            }
        };

        function update(){
            ProductService.update(editProductCtrl.product)
                .then(function (result) {
                    $location.path('/products');

                    StatusCodeInterpreterService.translate(result.status);
                }, function(error){
                    editProductCtrl.generalMessages = error.data;
                });
        };

        function reset(){
            editProductCtrl.product.name = '';
            editProductCtrl.validate('name');
            editProductCtrl.product.quantity = '';
            editProductCtrl.validate('quantity');
            editProductCtrl.product.price = '';
            editProductCtrl.validate('price');
        };
    };
})();