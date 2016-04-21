(function(){
    'use strict';

    angular
        .module('ServicesModule', []);

    ////////////

    angular
        .module('ServicesModule')
        .factory('ServiceBase', ServiceBase);

    function ServiceBase(){
        return 'http://localhost:3000/api/';
    };
})();