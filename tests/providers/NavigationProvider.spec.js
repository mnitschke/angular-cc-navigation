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

    var element_3 = {
        "id": "comments",
        "label": "Comments",
        "href": "fo.bar",
        "priority": 500
    };

    var child_1 = {
        "id": "test_1",
        "label": "Test",
        "href": "fo.bar",
        "priority": 200
    };

    var child_2 = {
        "id": "test_2",
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
            navigationProvider.add(element_2);
            navigationProvider.add(element_1);
            navigationProvider.addChild("tags", child_1);
            navigationProvider.addChild("tags", child_2);
        });

        it('should push element', shouldPushElement);
        it('should push child into element', shouldPushChildIntoElement);
        it('should throw an error because of element', shouldThrowAnErrorBecauseOfElement);
        it('should throw an error because of child', shouldThrowAnErrorBecauseOfChild);
        it('should check if sorted', shouldCheckIfSorted);

        function shouldPushElement() {
            expect(Object.keys(navigationProvider.elements).length).toBe(2);
        }

        function shouldPushChildIntoElement() {
            var element = navigationProvider.getElement("tags");
            expect(Object.keys(element.children).length).toBe(2);
        }

        function shouldThrowAnErrorBecauseOfElement() {
            expect(function(){navigationProvider.add(element_1)}).toThrowError("Element with priority 205 already exists");
        }

        function shouldThrowAnErrorBecauseOfChild() {
            expect(function(){navigationProvider.addChild("tags", child_1)}).toThrowError("tags already have child with priority 200");
        }

        function shouldCheckIfSorted() {
            for (var i = 0; i < navigationProvider.elements.length-1; i++) {
                expect(navigationProvider.elements[i].priority).toBeGreaterThan(navigationProvider.elements[i+1].priority);
            }
        }
    });

    function shouldBeDefined() {
        expect(navigationProvider).toBeDefined();
    }
});