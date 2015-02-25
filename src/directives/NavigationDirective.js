(function(){
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    function NavigationDirective(){
        var directive = {
            restrict: 'E',
            controller: MODULE_NAME+'.NavigationController',
            controllerAs: 'navCtrl',
            templateUrl: 'navigation.html'
        };
        return directive;
    }

    angular
        .module(MODULE_NAME)
        .directive('ccNav', NavigationDirective);
}());