'use strict';

describe('EdgesFilter', function() {
	var filter, edges, filterBy;

	beforeEach(module('swFrontApp'), function($provide) {
		$provide.value('$log', console);
	});
	beforeEach(inject(function(edgesFilter) {
		filter = edgesFilter;
		edges = [
			{
				requirements: [
					{name: null, value: 'Novice', type: 'rank'},
					{name: 'Agility', value: 'd6', type: 'trait'}
				],
				category: {name: 'first'},
			},
			{
				requirements: [
					{name: null, value: 'Seasoned', type: 'rank'},
					{name: 'Agility', value: 'd6', type: 'trait'}
				],
				category: {name: 'second'}
			}
		];
		filterBy = {category: {name: 'first'}, rank: {name: 'Novice'}};
	}));

	describe('Category Filter', function() {
		it('filters by category name', function() {
			filterBy.rank.name = 'All';
			expect(filter(edges, filterBy).length).toEqual(1);
		});

		it('returns all elements by filter All', function() {
			filterBy.rank.name = 'All';
			filterBy.category.name = 'All';
			expect(filter(edges, filterBy).length).toEqual(edges.length);
		});
	});

	describe('Rank Filter', function() {
		it('filters by rank name', function() {
			filterBy.category.name = 'All';
			expect(filter(edges, filterBy).length).toEqual(1);
		});

		it('returns all elements by filter All', function() {
			filterBy.category.name = 'All';
			filterBy.rank.name = 'All';
			expect(filter(edges, filterBy).length).toEqual(edges.length);
		});
	});
});