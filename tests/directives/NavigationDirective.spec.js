(function() {
    'use strict';

    describe('Unit: NavigationDirective', function () {
        var MODULE_NAME = 'angular-cc-navigation',
            PROVIDER_NAME = 'angular-cc-navigation.$navigation';

        var scope, provider, element;

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

        var child = {
            "label": "Child",
            "href": "fo.bar",
            "priority": 205
        };

        beforeEach(module(MODULE_NAME));
        beforeEach(module('navigation.html'));

        beforeEach(inject(function ($rootScope, $compile, $injector) {
            scope = $rootScope;

            provider = $injector.get(PROVIDER_NAME);
            provider.add("tags", element_1).add("child", child);
            provider.add("config", element_2);

            element = angular.element('<cc-nav></cc-nav>');
            element = $compile(element)(scope);
            scope.$digest();
        }));

        it('should get all ul', shouldGetAllUl);
        it('should get all li', shouldGetAllLi);
        it('should get li from level 0', shouldGetLiFromLevel0);
        it('should get li from level 1', shouldGetLiFromLevel1);

        function shouldGetAllUl() {
            var ul = element.find('ul');
            expect(ul.length).toBe(2);
        }

        function shouldGetAllLi() {
            var li = element.find('li');
            expect(li.length).toBe(3);
        }

        function shouldGetLiFromLevel0() {
            var li = angular.element(element[0].querySelector('ul#cc-navigation')).children("li");
            expect(li.length).toBe(2);
        }

        function shouldGetLiFromLevel1() {
            var li = angular.element(element[0].querySelector('ul.cc-children')).children("li");
            expect(li.length).toBe(1);
        }
    });
}());