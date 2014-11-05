'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:EdgesController
 * @description
 * # MainCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('EdgesController', function ($scope, edges) {
  	$scope.edges = edges.query();
  	
  	var selectedEdge = null;
  	$scope.isSelected = function(edge) {
  		return edge === selectedEdge;
  	};
  	$scope.selectEdge = function(edge) {
  		selectedEdge = (selectedEdge === edge) ? null : edge;
  	}

  	$scope.displayRequirements = function(reqs) {
  		var result = '';
  		for (var i = 0; i < reqs.length; i++) {
  			if (result !== '') result += ', ';
  			if (reqs[i].name) 
  				result += reqs[i].name + ' ' + reqs[i].value;	
  			result += reqs[i].value;
  		}
  		return result;
  	};
  });
