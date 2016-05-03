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
	findListOfPlaces: Ember.computed(function() {
		var geography = this.store.findAll('geography');
		var places = [];
		console.log(geography);
		console.log(geography.get('firstObject'));
		// console.log(data.get('country'));
		console.log(places);
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
		}
	}
});

  // var data = this.model.get('firstObject');
  //     this.set('data', data);

      // var places = []; 
      // places = places.concat(Object.keys(data.get('country')));
      // places = places.concat(Object.keys(data.get('state')));
      // places = places.concat(Object.keys(data.get('metro')));
      // this.set('places', places);