(function () {
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    function NavigationController(scope, provider) {
        var $this = this;

        scope.elements = provider.elements;
    }

    NavigationController.$inject = [
        '$scope',
        MODULE_NAME + '.$navigation'
    ];

    angular
        .module(MODULE_NAME)
        .controller(MODULE_NAME + '.NavigationController', NavigationController);
}());