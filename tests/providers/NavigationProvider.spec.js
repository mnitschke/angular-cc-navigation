describe('Unit: NavigationProvider', function(){
    var MODULE_NAME = 'angular-cc-navigation',
        PROVIDER_NAME = 'angular-cc-navigation.$navigation';

    var element_1 = {
        "id": "tags",
        "label": "Tags",
        "priority": 205
    };

    var element_2 = {
        "id": "config",
        "label": "Conifg",
        "priority": 200
    };

    var child_1 = {
        "id": "test_1",
        "label": "Test",
        "priority": 200
    };

    var child_2 = {
        "id": "test_2",
        "label": "Test",
        "priority": 210
    };

    var navigationProvider;

    beforeEach(module(MODULE_NAME));

    beforeEach(inject([PROVIDER_NAME, function(NavigationProvider){
        navigationProvider = NavigationProvider;
    }]));

    it('should be defined', shouldBeDefined);

    describe('Providers add functions', function () {
        beforeEach(function () {
            navigationProvider.add(element_1);
            navigationProvider.add(element_2);
            navigationProvider.addChild("tags", child_2);
            navigationProvider.addChild("tags", child_1);
        });

        it('should push element', shouldPushElement);
        //it('should check if elements sort works properly', shouldCheckIfElementsSortWorksProperly);
        //it('should push child into element', shouldPushChildIntoElement);
    });

    function shouldBeDefined() {
        expect(navigationProvider).toBeDefined();
    }

    function shouldPushElement() {
        expect(Object.keys(navigationProvider.elements).length).toBe(2);
    }
});