(function () {
    'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    /**
     * @namespace angular-cc-navigation
     * @name NavigationProvider
     *
     * @constructor
     */

    function NavigationProvider(){
        var $this = this;

        this.elements = [];

        this.add = add;
        this.get = get;

        /**
         * @param {String} id
         * @param {Object} element
         * @returns {NavigationProvider}
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
         * @returns {NavigationProvider}
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