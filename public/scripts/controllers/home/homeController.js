(function(){
    'use strict';

    angular
        .module('ControllersModule')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];
    function HomeController(){
        var homeCtrl = this;
    };
})();