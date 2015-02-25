(function () {
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    NavigationController.$inject = [ MODULE_NAME + '.$navigation'];

    function NavigationController(provider) {
        var $this = this;

        this.elements = provider.elements;
    }

    angular
        .module(MODULE_NAME)
        .controller(MODULE_NAME + '.NavigationController', NavigationController);

}());