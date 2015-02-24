(function() {
    'use strict';

    describe('Unit: NavigationStorage', function () {
        var MODULE_NAME = 'angular-cc-navigation',
            STORAGE_NAME = 'angular-cc-navigation.NavigationStorage';

        var element_1 = {
            "id": "tags",
            "label": "Tags",
            "href": "fo.bar",
            "priority": 205
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
            "priority": 250
        };

        var storage;

        beforeEach(module(MODULE_NAME));

        beforeEach(inject([STORAGE_NAME, function($storage){
            storage = $storage;
        }]));

        it('should be defined', shouldBeDefined);

        describe('Storage add and get functions', function () {
            beforeEach(function(){
                storage
                    .add("tags", element_1)
                        .add("child_1", child_1);
                storage
                    .get("tags")
                        .add("child_2", child_2);
            });

            it('should push element', shouldPushElement);
            it('should get element', shouldGetElement);
            it('should push child into element', shouldPushChildIntoElement);
            it('should throw an error because of element', shouldThrowAnErrorBecauseOfElement);
            it('should throw an error because of child', shouldThrowAnErrorBecauseOfChild);
            it('should check if sorted', shouldCheckIfSorted);

        });

        function shouldBeDefined() {
            expect(storage).toBeDefined();
        }

        function shouldGetElement() {
            expect(storage.get("tags")).toBeDefined();
        }

        function shouldPushElement() {
            expect(Object.keys(storage.elements).length).toBe(1);
        }

        function shouldPushChildIntoElement() {
            var element = storage.get("tags");
            expect(Object.keys(element.elements).length).toBe(2);
        }

        function shouldThrowAnErrorBecauseOfElement() {
            expect(function(){storage.add("tags",element_1)}).toThrowError("Element with priority 205 already exists");
        }

        function shouldThrowAnErrorBecauseOfChild() {
            expect(function(){storage.get("tags").add("child_1", child_1)}).toThrowError("Element with priority 200 already exists");
        }

        function shouldCheckIfSorted() {
            for (var i = 0; i < storage.elements.length-1; i++) {
                expect(storage.elements[i].priority).toBeGreaterThan(storage.elements[i+1].priority);
            }
        }
    });
}());