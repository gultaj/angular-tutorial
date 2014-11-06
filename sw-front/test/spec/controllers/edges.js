'use strict';

describe('Controller: EdgesController', function () {

  var scope, controller;

  beforeEach(module('swFrontApp'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('EdgesController', {
      $scope: scope
    });
  }));

  describe('displayRequirements', function() {
    var reqs;
    it('it concatenates name and value of the requirements', function() {
      reqs = [{name: 'Agility', value: 'd6'}];
      expect(scope.displayRequirements(reqs)).toEqual('Agility d6');
    });
  });
});
