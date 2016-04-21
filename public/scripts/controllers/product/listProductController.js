(function(){    
    'use strict';

    angular
        .module('ControllersModule')
        .controller('ListProductController', ListProductController);

    ListProductController.$inject = ['$scope', 'ProductService', 'StatusCodeInterpreterService'];
    function ListProductController($scope, ProductService, StatusCodeInterpreterService){
        var listProductCtrl = this;

        listProductCtrl.product = {};
        listProductCtrl.products = [];
        listProductCtrl.toggleFilter = toggleFilter;
        listProductCtrl.showModalDelete = showModalDelete;
        listProductCtrl.confirmDelete = confirmDelete;

        activate();

        ////////////

        function activate(){
            return ProductService.getAll()
                .then(function(result){
                    listProductCtrl.products = result.data;
                }, function(error){
                    StatusCodeInterpreterService.translate(error.status);
                });
        };

        function toggleFilter(){
            $scope.$emit('filterButtonActivated');
        };

        function showModalDelete(product){
            $scope.$broadcast('showModalDelete');

            listProductCtrl.product = product;
        };

        function confirmDelete(){
            $scope.$broadcast('hideModalDelete');

            ProductService.remove(listProductCtrl.product.id)
                .then(function(result){
                    listProductCtrl.products.splice(listProductCtrl.products.indexOf(listProductCtrl.product), 1);

                    StatusCodeInterpreterService.translate(result.status);
                }, function(error){
                    StatusCodeInterpreterService.translate(error.status);
                });
        };
    };
})();