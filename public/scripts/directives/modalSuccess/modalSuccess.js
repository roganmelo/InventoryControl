(function(){
    'use strict';

    angular
        .module('DirectivesModule')
        .directive('modalSuccess', ModalSuccess);

    ModalSuccess.$inject = [];
    function ModalSuccess(){
        var directive = {
        	restrict: 'E',
            scope: {
                body: '@'
            },
            link: link,
        	templateUrl: 'scripts/directives/modalSuccess/modalSuccess.html',
            controller: 'LayoutController',
            controllerAs: 'layoutCtrl'
        };

        return directive;

        ////////////

        function link(scope, element){
            var elementChildren = angular.element(element.children()[0]);
            var cloak = angular.element(document.getElementById('cloak'));

            scope.$on('showModalSuccess', function(event, args){
                scope.body = args;

                cloak.addClass('show');
                elementChildren.addClass('active');
            });

            scope.$on('hideModalSuccess', function(){
                cloak.removeClass('show');
                elementChildren.removeClass('active');
            });
        };
    };
})();