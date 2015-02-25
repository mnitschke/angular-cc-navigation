(function () {
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    angular
        .module(MODULE_NAME, []);
}());
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
(function () {
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    function NavigationProvider(){
        var $this = this;

        this.elements = [];

        this.add = add;
        this.get = get;

        /**
         * @param {String} id
         * @param {Object} element
         */

        function add(id, element){
            for(var el in $this.elements){
                if($this.elements[el].id === id) {
                    throw new Error('Element with priority '+element.priority+' already exists');
                }
            }

            element.children = new NavigationProvider();
            element.id = id;

            $this.elements.push(element);
            $this.elements.sort(function (a, b) {
                if (a.priority < b.priority)
                    return 1;
                if (a.priority > b.priority)
                    return -1;
                return 0;
            });
            return $this.get(id);
        }

        /**
         * @param {String} id
         */
        function get(id) {
            for(var el in $this.elements){
                if($this.elements[el].id === id){
                    return $this.elements[el].children;
                }
            }
            throw new Error('Element with id ' + parent + 'doesn\'t exist');
        }

        this.$get = function $get() {
           return $this;
        };
    }

    angular
        .module(MODULE_NAME)
        .provider(MODULE_NAME+'.$navigation', NavigationProvider);
}());