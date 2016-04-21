(function(){    
    'use strict';

    angular
        .module('DirectivesModule')
        .directive('sidebar', Sidebar);

    Sidebar.$inject = [];
    function Sidebar(){
        var directive = {
        	restrict: 'E',
            link: link,
        	templateUrl: 'scripts/directives/sidebar/sidebar.html',
            controller: 'LayoutController',
            controllerAs: 'layoutCtrl'
        };

        return directive;

        ////////////

        function link(scope, element){
            scope.$on('buttonMenuActivated', function(){
                if(element.hasClass('active'))
                    element.removeClass('active');
                else
                    element.addClass('active');
            });
        };
    };
})();