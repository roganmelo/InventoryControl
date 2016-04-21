(function(){
    'use strict';

    angular
        .module('DirectivesModule')
        .directive('menuButton', MenuButton);

    MenuButton.$inject = [];
    function MenuButton(){
        var directive = {
        	restrict: 'E',
            link: link,
        	templateUrl: 'scripts/directives/menuButton/menuButton.html'
        };

        return directive;

        ////////////

        function link(scope, element){
            scope.$on('buttonMenuActivated', function(){
                var elementChildren = angular.element(element.children()[0]);
                var elementGrandfather = angular.element(element.parent().parent());

                if(elementChildren.hasClass('active')){
                    elementChildren.removeClass('active');
                    elementGrandfather.css('padding-left', '0');
                }else{
                    elementChildren.addClass('active');
                    elementGrandfather.css('padding-left', '250px');
                }
            });
        };
    };
})();