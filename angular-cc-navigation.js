(function () {
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    angular
        .module(MODULE_NAME, []);
}());
(function () {
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    function NavigationProvider(){
        var $this = this;

        this.elements = {};

        this.add = addElement;
        this.addChild = addChild;
        this.getElement = getElement;
        /**
         * Add element (level 0)
         *
         * @param {Object} element
         */
        function addElement(element){
            if($this.elements[element.id] !== undefined) {
                throw new Error('Element with priority '+element.priority+' already exists');
            }

            element.children = {};

            $this.elements[element.id] = element;
            $this.elements = sort($this.elements);
        }

        /**
         * Add child (level 1)
         *
         * @param {String} parent
         * @param {Object} child
         */
        function addChild(parent, child){
            if($this.elements[parent] === undefined) {
                throw new Error('Element with id ' + parent + 'doesn\'t exist');
            }

            if($this.elements[parent].children[child.id] !== undefined) {
                throw new Error(parent+' already have child with priority '+child.priority);
            }

            $this.elements[parent].children[child.id] = child;
            $this.elements[parent].children = sort($this.elements[parent].children);
        }

        /**
         * Get element
         *
         * @param {String} id
         */
        function getElement(id) {
            if($this.elements[id] === undefined) {
                throw new Error('Element with id ' + parent + 'doesn\'t exist');
            }

            return $this.elements[id];
        }

        /**
         * @param {Object} objects
         * @returns {Object}
         */
        function sort(objects){
            var prepare = [];
            var fin = {};

            for(var i in objects){
                prepare.push([i, objects[i].priority]);
            }
            prepare.sort(function(a, b){return a[1]-b[1]}).reverse();
            for(var x in prepare) {
                fin[prepare[x][0]] = objects[prepare[x][0]];
            }
            return fin;
        }

        this.$get = function $get() {
            return $this;
        }
    }

    angular
        .module(MODULE_NAME)
        .provider(MODULE_NAME+'.$navigation', NavigationProvider);
}());
(function(){
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    function Navigator(provider){
        var $this = this;
    }

    Navigator.$inject = [
        MODULE_NAME+'.$navigation'
    ];

    angular
        .module(MODULE_NAME)
        .directive('ccNav', Navigator);
}());