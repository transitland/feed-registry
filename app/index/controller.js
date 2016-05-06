import Ember from 'ember';
import PaginatedOrderedController from 'feed-registry/mixins/paginated-ordered-controller';
import ENV from 'feed-registry/config/environment';


export default Ember.Controller.extend(PaginatedOrderedController, {
	queryParams: ['import_level'],
	import_level: null,
	place: null,
	typeOfPlace: null,
	country: null,
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
	placesModel: Ember.computed(function() {
		return this.store.findAll('geography');
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
		transitionToLocationFilter: function(country){
			this.transitionTo({
				queryParams: {
					"country": country,
					"state": state,
					"metro": metro,
				}
			});
		},
		findPlaces: function(){
			var places = this.store.findAll('geography');
		},
		filterByPlace: function(place, typeOfPlace){
			this.set('place', place);
			this.set('typeOfPlace', typeOfPlace);
			if (typeOfPlace === "country"){
				this.set('country', place);
				this.set('state', null);
				this.set('metro', null);
			} else if (typeOfPlace === "state"){
				this.set('country', null);
				this.set('state', place);
				this.set('metro', null);
			} else if (typeOfPlace === "country"){
				this.set('country', null);
				this.set('state', null);
				this.set('metro', place);
			}
		}
	}
});
