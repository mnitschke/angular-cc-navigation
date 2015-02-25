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

//function sort(objects){
//    var prepare = [];
//    var fin = {};
//
//    for(var i in objects){
//        prepare.push([i, objects[i].priority]);
//    }
//    prepare.sort(function(a, b){return a[1]-b[1]}).reverse();
//    for(var x in prepare) {
//        fin[prepare[x][0]] = objects[prepare[x][0]];
//    }
//    return fin;
//}
//function add_dep(id, element){
//    if($this.elements[id] !== undefined) {
//        throw new Error('Element with priority '+element.priority+' already exists');
//    }
//
//    element.elements = new NavigationProvider();
//
//    $this.elements[id] = element;
//    $this.elements = sort($this.elements);
//
//    return $this.elements[id].elements;
//}
//function get_dep(id) {
//    if($this.elements[id] === undefined) {
//        throw new Error('Element with id ' + parent + 'doesn\'t exist');
//    }
//
//    return $this.elements[id].elements;
//}