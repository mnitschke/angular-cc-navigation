(function(){
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    function Navigator(provider){
        var $this = this;
    }

    Navigator.$inject = [
        MODULE_NAME+'.$navigation'
    ];

    anglar
        .module(MODULE_NAME)
        .directive('ccNav', Navigator);
}());