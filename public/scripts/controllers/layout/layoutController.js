(function(){
    'use strict';

    angular
        .module('ControllersModule')
        .controller('LayoutController', LayoutController);

    LayoutController.$inject = ['$scope'];
    function LayoutController($scope){
        var layoutCtrl = this;

        layoutCtrl.date = new Date;
        layoutCtrl.toggleSidebar = toggleSidebar;
        layoutCtrl.closeModalSuccess = closeModalSuccess;
        layoutCtrl.closeModalDelete = closeModalDelete;
        layoutCtrl.closeModalError = closeModalError;

        ////////////

        function toggleSidebar(){
            $scope.$emit('buttonMenuActivated');
        };

        function closeModalSuccess(){
            $scope.$emit('hideModalSuccess');
        };

        function closeModalDelete(){
            $scope.$emit('hideModalDelete');
        };

        function closeModalError(){
            $scope.$emit('hideModalError');
        };
    };
})();