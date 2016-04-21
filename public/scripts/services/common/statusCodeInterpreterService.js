(function(){    
    'use strict';

    angular
        .module('ServicesModule')
        .factory('StatusCodeInterpreterService', StatusCodeInterpreterService);

    StatusCodeInterpreterService.$inject = ['$rootScope'];
    function StatusCodeInterpreterService($rootScope){
        var StatusCodeInterpreterServiceFactory = {
            translate: translate
        };

        return StatusCodeInterpreterServiceFactory;

        ////////////

        function translate(status){
            switch(status){
                case 200:
                    $rootScope.$broadcast('showModalSuccess', 'Successfully completed operation.');
                    break;
                case 201:
                    $rootScope.$broadcast('showModalSuccess', 'Item saved successfully.');
                    break;
                case 400:
                    $rootScope.$broadcast('showModalError', 'Bad request.');
                    break;
                case 404:
                    $rootScope.$broadcast('showModalError', 'Item not found.');
                    break;
                case 500:
                    $rootScope.$broadcast('showModalError', 'Internal server error.');
                    break;
            }
        };
    };
})();