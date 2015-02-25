(function(){
    'use strict';

    describe('Unit: NavigationProvider', function(){
        var MODULE_NAME = 'angular-cc-navigation',
            PROVIDER_NAME = 'angular-cc-navigation.$navigation';

        var element_1 = {
            "label": "Tags",
            "href": "fo.bar",
            "priority": 205
        };

        var element_2 = {
            "label": "Conifg",
            "href": "fo.bar",
            "priority": 200
        };

        var child_1 = {
            "label": "CHILD_1",
            "href": "fo.bar",
            "priority": 200
        };

        var child_2 = {
            "label": "CHILD_2",
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
                        .add("child_2", child_2);
            });

            it('should get element', shouldGetElement);
            it('should push element into level 0', shouldPushElementIntoLevel0);
            it('should push child into element', shouldPushChildIntoElement);
            it('should throw an error because of element', shouldThrowAnErrorBecauseOfElement);
            it('should throw an error because of child', shouldThrowAnErrorBecauseOfChild);
            it('should check if sorted properly', shouldCheckIfSortedProperly);

        });

        function shouldBeDefined() {
            expect(navigationProvider).toBeDefined();
        }

        function shouldGetElement() {
            expect(navigationProvider.get("tags")).toBeDefined();
        }

        function shouldPushElementIntoLevel0() {
            expect(navigationProvider.elements.length).toBe(2);
        }

        function shouldPushChildIntoElement() {
            var element = navigationProvider.get("tags");
            expect(element.elements.length).toBe(2);
        }

        function shouldThrowAnErrorBecauseOfElement() {
            expect(function(){navigationProvider.add("tags",element_1)}).toThrowError("Element with priority 205 already exists");
        }

        function shouldThrowAnErrorBecauseOfChild() {
            expect(function(){navigationProvider.get("tags").add("child_1", child_1)}).toThrowError("Element with priority 200 already exists");
        }

        function shouldCheckIfSortedProperly() {
            for (var i = 0; i < navigationProvider.elements.length-1; i++) {
                expect(navigationProvider.elements[i].priority).toBeGreaterThan(navigationProvider.elements[i+1].priority);
            }
        }
    });
}());