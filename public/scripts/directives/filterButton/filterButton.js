(function(){    
    'use strict';

    angular
        .module('DirectivesModule')
        .directive('filterButton', FilterButton);

    FilterButton.$inject = [];
    function FilterButton(){
        var directive = {
        	restrict: 'E',
            link: link,
        	templateUrl: 'scripts/directives/filterButton/filterButton.html'
        };

        return directive;

        ////////////

        function link(scope, element){
            scope.$on('filterButtonActivated', function(){
                var elementChildren = angular.element(element.children()[0]);
                var mainPanelBodyList = angular.element(document.getElementsByClassName('list')[0]);

                if(elementChildren.hasClass('active')){
                    elementChildren.removeClass('active');
                    mainPanelBodyList.removeClass('active');
                }else{
                    elementChildren.addClass('active');
                    mainPanelBodyList.addClass('active');
                }
            });
        };
    };
})();