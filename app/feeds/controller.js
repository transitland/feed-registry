import Ember from 'ember';

export default Ember.Controller.extend({
	filterAttribute: 'feed.license_attribution',
	filterValue: 'required',
	filteredOperators: function() {
		return this.model.filterBy('feed.license_attribution', 'required');
	}.property('filterAttribute'),
	
	actions: {
		filterBy: function(attribute, value) {
			console.log(attribute + ' ' + value);
			this.set('filterAttribute', attribute);
			this.set('filterValue', value);
		}
	}

});
