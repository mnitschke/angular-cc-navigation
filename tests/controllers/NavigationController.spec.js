(function() {
    'use strict';

    describe('Unit: NavigationDirective', function () {
        var MODULE_NAME = 'angular-cc-navigation',
            PROVIDER_NAME = 'angular-cc-navigation.$navigation',
            CONTROLLER_NAME = 'angular-cc-navigation.NavigationController';

        var scope, ctrl, provider;

        var element_1 = {
            "label": "Tags",
            "href": "fo.bar",
            "priority": 205
        };

        var element_2 = {
            "label": "Config",
            "href": "fo.bar",
            "priority": 200
        };

        var child_1 = {
            "label": "Child",
            "href": "fo.bar",
            "priority": 200
        };

        beforeEach(module(MODULE_NAME));

        beforeEach(inject(function ($controller, $rootScope, $injector) {
            scope = $rootScope;
            ctrl = $controller(CONTROLLER_NAME, {'$scope': scope});

            provider = $injector.get(PROVIDER_NAME);
        }));


        describe('tests for data pased from provider', function(){
            beforeEach(function () {
                provider
                    .add("tags", element_1)
                        .add("child_1", child_1);

                provider
                    .add("config", element_2);
            });

            it('should return elements from level 0', shouldGetElementsFromLevel0);
            it('should return elements from level 1', shouldReturnElementsFromLevel1);
            it('should return children from tags element', shouldReturnChildrenFromTagsElement);

            function shouldGetElementsFromLevel0() {
                expect(scope.elements.length).toBe(2);
            }

            function shouldReturnElementsFromLevel1() {
                var counter = 0;
                for(var i in scope.elements){
                    counter += scope.elements[i].children.elements.length;
                }
                expect(counter).toBe(1);
            }

            function shouldReturnChildrenFromTagsElement() {
                for(var i in scope.elements){
                    if(scope.elements[i].id === "tags"){
                        expect(scope.elements[i].children.elements.length).toBe(1);
                    }
                }
            }
        });
    });
}());