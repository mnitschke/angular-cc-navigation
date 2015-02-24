(function(){
    'use strict';

    describe('Unit: NavigationProvider', function(){
        var MODULE_NAME = 'angular-cc-navigation',
            PROVIDER_NAME = 'angular-cc-navigation.$navigation';

        var element_1 = {
            "id": "tags",
            "label": "Tags",
            "href": "fo.bar",
            "priority": 205
        };

        var element_2 = {
            "id": "config",
            "label": "Conifg",
            "href": "fo.bar",
            "priority": 200
        };

        var child_1 = {
            "id": "child_1",
            "label": "Test",
            "href": "fo.bar",
            "priority": 200
        };

        var child_2 = {
            "id": "child_2",
            "label": "Test",
            "href": "fo.bar",
            "priority": 210
        };

        var navigationProvider;

        beforeEach(module(MODULE_NAME));

        beforeEach(inject([PROVIDER_NAME, function(NavigationProvider){
            navigationProvider = NavigationProvider;
        }]));

        it('should be defined', shouldBeDefined);

        describe('Providers add functions', function () {
            beforeEach(function(){
                navigationProvider
                    .add("config", element_2);
                navigationProvider
                    .add("tags", element_1);
                navigationProvider
                    .get("tags")
                        .add("child_1", child_1);
                navigationProvider
                    .get("tags")
                        .add("child_2", child_1);
            });

            it('should get element', shouldGetElement);
            it('should push element', shouldPushElement);
            it('should push child into element', shouldPushChildIntoElement);
            it('should throw an error because of element', shouldThrowAnErrorBecauseOfElement);
            it('should throw an error because of child', shouldThrowAnErrorBecauseOfChild);
            it('should check if sorted', shouldCheckIfSorted);

        });

        function shouldBeDefined() {
            expect(navigationProvider).toBeDefined();
        }

        function shouldGetElement() {
            expect(navigationProvider.get("tags")).toBeDefined();
        }

        function shouldPushElement() {
            expect(Object.keys(navigationProvider.elements).length).toBe(2);
        }

        function shouldPushChildIntoElement() {
            var element = navigationProvider.get("tags");
            expect(Object.keys(element.elements).length).toBe(2);
        }

        function shouldThrowAnErrorBecauseOfElement() {
            expect(function(){navigationProvider.add("tags",element_1)}).toThrowError("Element with priority 205 already exists");
        }

        function shouldThrowAnErrorBecauseOfChild() {
            expect(function(){navigationProvider.get("tags").add("child_1", child_1)}).toThrowError("Element with priority 200 already exists");
        }

        function shouldCheckIfSorted() {
            for (var i = 0; i < navigationProvider.elements.length-1; i++) {
                expect(navigationProvider.elements[i].priority).toBeGreaterThan(navigationProvider.elements[i+1].priority);
            }
        }
    });
}());