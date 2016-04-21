(function(){    
    'use strict';

    angular
        .module('ControllersModule')
        .controller('DetailsProductController', DetailsProductController);

    DetailsProductController.$inject = ['$scope', '$routeParams', '$location', 'ProductService',
    'StatusCodeInterpreterService'];
    function DetailsProductController($scope, $routeParams, $location, ProductService, StatusCodeInterpreterService){
        var detailsProductCtrl = this;

        detailsProductCtrl.product = {};
        detailsProductCtrl.showModalDelete = showModalDelete;
        detailsProductCtrl.confirmDelete = confirmDelete;

        activate();

        ////////////

        function activate(){
            return ProductService.getById($routeParams.id)
                .then(function(result){
                    detailsProductCtrl.product = result.data;
                }, function(error){
                    if(error.status === 404)
                        $location.path('/products');

                    StatusCodeInterpreterService.translate(error.status);
                });
        };

        function showModalDelete(product){
            $scope.$emit('showModalDelete');
        };

        function confirmDelete(){
            $scope.$emit('hideModalDelete');

            ProductService.remove(detailsProductCtrl.product.id)
                .then(function(result){
                    $location.path('/products');

                    StatusCodeInterpreterService.translate(result.status);
                }, function(error){
                    StatusCodeInterpreterService.translate(error.status);
                });
        };
    };
})();