'use strict';

angular.module('swFrontApp').service('edges', function() {
	this.query = function() {
		return [
	  	{
	  		name: 'Attractive',
	  		category: {
	  			name: 'Background'
	  		},
	  		requirements: [
	  			{name: null, value: 'Something'},
	  			{name: 'Ability', value: 'd6'}
	  		],
	  		description: 'description'
	  	},
	  	{
	  		name: 'Attractive',
	  		category: {
	  			name: 'Background'
	  		},
	  		requirements: [
	  			{name: null, value: 'Something'},
	  			{name: 'Ability', value: 'd6'}
	  		],
	  		description: 'description'
	  	}
  	];
	}
});