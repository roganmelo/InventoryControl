(function(){
    'use strict';

    angular
        .module('DirectivesModule')
        .directive('modalDelete', ModalDelete);

    ModalDelete.$inject = [];
    function ModalDelete(){
        var directive = {
            restrict: 'E',
            transclude: true,
            link: link,
            templateUrl: 'scripts/directives/modalDelete/modalDelete.html',
            controller: 'LayoutController',
            controllerAs: 'layoutCtrl'
        };

        return directive;

        ////////////

        function link(scope, element){
            var elementChildren = angular.element(element.children()[0]);
            var cloak = angular.element(document.getElementById('cloak'));

            scope.$on('showModalDelete', function(){
                cloak.addClass('show');
                elementChildren.addClass('active');
            });

            scope.$on('hideModalDelete', function(){
                cloak.removeClass('show');
                elementChildren.removeClass('active');
            });
        };
    };
})();