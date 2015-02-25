(function() {
    'use strict';

    describe('Unit: NavigationDirective', function () {
        var MODULE_NAME = 'angular-cc-navigation',
            PROVIDER_NAME = 'angular-cc-navigation.$navigation',
            CONTROLLER_NAME = 'angular-cc-navigation.NavigationController';

        var element_1 = {
            "id": "tags",
            "label": "Tags",
            "href": "fo.bar",
            "priority": 205
        };

        var $scope, $rootScope, $injector, $controller, provider, navCtrl;

        beforeEach(module(MODULE_NAME));

        beforeEach(inject(function (_$injector_, _$controller_, _$rootScope_) {
            $injector = _$injector_;
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();

            navCtrl = $controller(CONTROLLER_NAME, {'$scope': $scope});

            provider = $injector.get(PROVIDER_NAME);
        }));


        describe('tests for data pased from provider', function(){
            beforeEach(function () {
                provider.add("tags", element_1);
            });

            it('should get elements level 0', shouldGetElementsLevel0);

            function shouldGetElementsLevel0() {
                expect(Object.keys[$scope.elements].length).toBe(1);
            }
        });
    });
});