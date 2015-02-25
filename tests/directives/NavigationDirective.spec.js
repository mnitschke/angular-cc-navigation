//(function() {
//    'use strict';
//
//    describe('Unit: NavigationDirective', function () {
//        var MODULE_NAME = 'angular-cc-navigation',
//            PROVIDER_NAME = 'angular-cc-navigation.$navigation',
//            CONTROLLER_NAME = 'angular-cc-navigation.NavigationController';
//
//        var $scope, $rootScope, $injector, $compile, $controller, provider, navCtrl;
//
//        beforeEach(module(MODULE_NAME));
//
//        beforeEach(inject(function (_$injector_, _$controller_, _$rootScope_, _$compile_) {
//            $injector = _$injector_;
//            $controller = _$controller_;
//            $rootScope = _$rootScope_;
//            $compile = _$compile_;
//            $scope = $rootScope.$new();
//
//            navCtrl = $controller(CONTROLLER_NAME, {'$scope': $scope});
//
//            provider = $injector.get(PROVIDER_NAME);
//        }));
//
//
//        describe('tests for data pased from provider', function(){
//            var element, scope;
//
//            beforeEach(function () {
//                element = '<cc-nav></cc-nav>';
//                element = $compile(element)($scope);
//                $scope.$digest();
//            });
//
//            it('should get elements level 0', shouldGetElementsLevel0);
//
//            function shouldGetElementsLevel0() {
//
//            }
//        });
//    });
//});