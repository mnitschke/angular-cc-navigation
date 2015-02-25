(function () {
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    /**
     * @namespace angular-cc-navigation
     * @name NavigationController
     *
     * @param scope
     * @param {NavigationProvider} provider
     * @constructor
     */

    function NavigationController(scope, provider) {
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