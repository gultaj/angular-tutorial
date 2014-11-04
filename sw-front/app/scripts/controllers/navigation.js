'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:NavigationController
 * @description
 * # MainCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('NavigationController', function ($scope, $location) {
  	$scope.isActive = function(path) {
  		return path === $location.path();
  	}
  });
