'use strict';

describe('Controller: NavigationController', function () {

  var location, scope, controller;

  beforeEach(module('swFrontApp'));

  beforeEach(inject(function($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope.$new();
    controller = $controller('NavigationController', {$scope: scope});
  }));

  describe('isActive', function() {
    it('return true when path are the same', function() {
      location.path('/test');
      expect(scope.isActive('/test')).toBeTruthy();
    });
    it('return false when path are different', function() {
      location.path('/diff');
      expect(scope.isActive('/test')).toBeFalsy();
    });
    it('return true when path are the same', function() {
      location.path('/test?query');
      expect(scope.isActive('/test')).toBeTruthy();
    });
  });
});
