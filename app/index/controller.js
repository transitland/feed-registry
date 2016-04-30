import Ember from 'ember';
import PaginatedOrderedController from 'feed-registry/mixins/paginated-ordered-controller';
import ENV from 'feed-registry/config/environment';


export default Ember.Controller.extend(PaginatedOrderedController, {
	queryParams: ['import_level'],
	import_level: null,
	filterByImportLevel: Ember.computed('import_level', function(){
		var import_level = this.get('import_level');
		var operators = this.get('model');

		if (import_level) {
			return operators.filterBy('import_level', import_level);	
		} else {
			return operators;
		}
	}),
	editingMode: Ember.computed(function(){
		return ENV.allowEditingMode;
	}),
	actions: {
		transitionToNewSort: function(sortOrder, sortKey){
			this.transitionTo({
				queryParams: {
					"sort_order": sortOrder,
					"sort_key": sortKey,
					"offset": 0,
				}
			});
		},
		test: function(){
			var places = this.store.findAll('geography');
			// console.log("geographies: " + this.store.findAll('geographies'));
			// console.log("geography: " + this.store.findAll('geography'));

			// places.then(function(data){debugger;});
			// places.then(function(data){debugger;});
		}
	}
});