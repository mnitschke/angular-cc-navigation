(function () {
   'use strict';

    var MODULE_NAME = 'angular-cc-navigation';

    function NavigationStorage() {
        var $this = this;

        this.elements = {};

        this.get = get;
        this.add = add;

        /**
         * @param {String} id
         * @returns {NavigationStorage}
         */
        function get(id) {
            if($this.elements[id] === undefined) {
                throw new Error('Element with id ' + parent + 'doesn\'t exist');
            }

            return $this.elements[id].elements;
        }

        /**
         * @param {Object} element
         * @returns {NavigationStorage}
         */
        function add(id, element){
            if($this.elements[id] !== undefined) {
                throw new Error('Element with priority '+element.priority+' already exists');
            }

            element.elements = new NavigationStorage();

            $this.elements[id] = element;
            $this.elements = sort($this.elements);

            return $this.elements[id].elements;
        }

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
        .factory(MODULE_NAME + '.NavigationStorage', function(){
            return new NavigationStorage();
        });
}());


///**
// * Add child (level 1)
// *
// * @param {String} parent
// * @param {Object} child
// */
//function addChild(parent, child){
//    if($this.elements[parent] === undefined) {
//        throw new Error('Element with id ' + parent + 'doesn\'t exist');
//    }
//
//    if($this.elements[parent].elements[child.id] !== undefined) {
//        throw new Error(parent+' already have child with priority '+child.priority);
//    }
//
//    $this.elements[parent].elements[child.id] = child;
//    $this.elements[parent].elements = sort($this.elements[parent].elements);
//}