(function () {
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    function NavigationProvider(){
        var $this = this;

        this.elements = {};

        this.add = add;
        this.get = get;

        /**
         * @param {String} id
         * @param {Object} element
         */
        function add(id, element){
            if($this.elements[id] !== undefined) {
                throw new Error('Element with priority '+element.priority+' already exists');
            }

            element.elements = new NavigationProvider();

            $this.elements[id] = element;
            $this.elements = sort($this.elements);

            return $this.elements[id].elements;
        }

        /**
         * @param {String} id
         */
        function get(id) {
            if($this.elements[id] === undefined) {
                throw new Error('Element with id ' + parent + 'doesn\'t exist');
            }

            return $this.elements[id].elements;
        }

        this.$get = function $get() {
           return $this;
        };

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

    }

    angular
        .module(MODULE_NAME)
        .provider(MODULE_NAME+'.$navigation', NavigationProvider);
}());