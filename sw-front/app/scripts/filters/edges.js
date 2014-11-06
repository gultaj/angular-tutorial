'use strict';

angular.module('swFrontApp').filter('edges', function() {
	var getRank = function(reqs) {
		var req = {};
		for (var i = 0; i < reqs.length; i++) {
			if (reqs[i].type === 'rank') {
				req = reqs[i];
				break;					
			}
		}
		return req.value;
	};

	return function(edges, filterBy) {
		return edges.filter(function(el, index, arr) {
			var category = (el.category.name === filterBy.category.name || filterBy.category.name === 'All'),
				rank = (filterBy.rank.name === 'All' || getRank(el.requirements) === filterBy.rank.name); 
			return category && rank;
		});
	};
});