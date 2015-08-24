import Ember from 'ember';

// license_attribution:
// required
// not_required
// unknown

export default Ember.Controller.extend({
	// filterAttribute: 'feed.license_attribution',
	// filterValue: 'required',
	// // filteredOperators: Ember.computed.filterBy('model', filterAttribute, 'not_required'),
	// filteredOperators: function() {
	// 	return this.model.filterBy('feed.license_attribution', 'required');
	// 	// return this.model.filterBy(this.get('filterAttribute'), this.get('filterValue'));
	// }.property('filterAttribute'),
	// // Ember.computed.filter('model', function(operator, index, array) {
	// 	// console.log(operator.feed);
	// 	// return true;
	// 	// return operator.feed.license_attribution == 'required';
	// 	// if (this.get('filterAttribute') != null) {
	// 	// 	return operator.get(this.get('filterAttribute')) ==  this.get('filterValue');
	// 	// } else {
	// 	// 	return true;
	// 	// }
	// // }),
	// actions: {
	// 	filterBy: function(attribute, value) {
	// 		console.log(attribute + ' ' + value);
	// 		this.set('filterAttribute', attribute);
	// 		this.set('filterValue', value);
	// 	}
	// }

});
