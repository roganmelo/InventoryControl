(function(){
    'use strict';

    angular
        .module('ServicesModule')
        .factory('ProductServiceBase', ProductServiceBase);

    ProductServiceBase.$inject = ['ServiceBase'];
    function ProductServiceBase(ServiceBase){
        return ServiceBase + 'products/';
    }; 
})();