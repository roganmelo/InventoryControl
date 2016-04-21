(function(){
    'use strict';

    angular
        .module('AppModule')
        .config(AppConfig);

    AppConfig.$inject = ['$routeProvider', '$locationProvider', 'cfpLoadingBarProvider'];
    function AppConfig($routeProvider, $locationProvider, cfpLoadingBarProvider){        
        //removing angular-loading-bar spinner
        cfpLoadingBarProvider.includeSpinner  = false;

        //using HTML5 History API
        $locationProvider.html5Mode(true);       

        //home routes
        $routeProvider
            .when('/', {
                templateUrl: 'views/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            });

        //products routes
        $routeProvider
            .when('/products', {
                templateUrl: 'views/product/list.html',
                controller: 'ListProductController',
                controllerAs: 'listProductCtrl'
            })
            .when('/products/new', {
                templateUrl: 'views/product/new.html',
                controller: 'NewProductController',
                controllerAs: 'newProductCtrl'
            })
            .when('/products/edit/:id', {
                templateUrl: 'views/product/edit.html',
                controller: 'EditProductController',
                controllerAs: 'editProductCtrl'
            })
            .when('/products/details/:id', {
                templateUrl: 'views/product/details.html',
                controller: 'DetailsProductController',
                controllerAs: 'detailsProductCtrl'
            });

        //default route
        $routeProvider.otherwise({redirectTo: '/'});
    };
})();