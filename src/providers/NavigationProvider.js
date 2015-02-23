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
            sort($this.elements);
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
         * Get element
         *
         * @param {Object} objects
         */
        //function sort(objects){
        //    var sortable = [];
        //    var fin = {};
        //
        //    for(var i in objects){
        //        sortable.push([i, objects[i].priority]);
        //    }
        //    sortable.sort().reverse();
        //    console.log(sortable);
        //}

        this.$get = function $get() {
            return $this;
        }
    }

    angular
        .module(MODULE_NAME)
        .provider(MODULE_NAME+'.$navigation', NavigationProvider);
}());