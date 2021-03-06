'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:EdgesController
 * @description
 * # MainCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('EdgesController', function ($scope, edges, categories, ranks) {
  	$scope.edges = edges.query();
    $scope.categories = categories.query();
    $scope.ranks = ranks.query();

    $scope.filterBy = {
      search: '',
      category: $scope.categories[0],
      rank: $scope.ranks[0]
    };
  	
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
  			else
          result += reqs[i].value;
  		}
  		return result;
  	};
  });
