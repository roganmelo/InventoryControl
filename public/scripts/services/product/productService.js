(function(){    
    'use strict';

    angular
        .module('ServicesModule')
        .factory('ProductService', ProductService);

    ProductService.$inject = ['$http', '$q', 'ProductServiceBase'];
    function ProductService($http, $q, ProductServiceBase){
        var productServiceFactory = {
            getAll: getAll,
            getById: getById,
            save: save,
            update: update,
            remove: remove
        };

        return productServiceFactory;

        ////////////

        function getAll(){
            return $q(function(resolve, reject) {
                $http.get(ProductServiceBase)
                    .then(function(result){
                        resolve({
                            data: result.data
                        });
                    }, function(error){
                        reject({
                            status: error.status
                        });
                    });
            });
        };

        function getById(id){
            return $q(function(resolve, reject) {
                $http.get(ProductServiceBase + id)
                    .then(function(result){
                        resolve({
                            status: result.status,
                            data: result.data
                        });
                    }, function(error){
                        reject({
                            status: error.status
                        });
                    });
            });
        };

        function save(product){
            return $q(function(resolve, reject) {
                $http.post(ProductServiceBase, product)
                    .then(function(result){
                        resolve({
                            status: result.status
                        });
                    }, function(error){
                        reject({
                            data: error.data
                        });
                    });
            });
        };

        function update(product){
            return $q(function(resolve, reject) {
                $http.put(ProductServiceBase + product.id, product)
                    .then(function(result){
                        resolve({
                            status: result.status
                        });
                    }, function(error){
                        reject({
                            data: error.data
                        });
                    });
            });
        };

        function remove(id){
            return $q(function(resolve, reject) {
                $http.delete(ProductServiceBase + id, {params: {id: id}})
                    .then(function(result){
                        resolve({
                            status: result.status
                        });
                    }, function(error){
                        reject({
                            status: error.status
                        });
                    });
            });
        };
    };
})();