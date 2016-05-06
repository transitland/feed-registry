import Ember from 'ember';
import PaginatedOrderedController from 'feed-registry/mixins/paginated-ordered-controller';
import ENV from 'feed-registry/config/environment';


export default Ember.Controller.extend(PaginatedOrderedController, {
	queryParams: ['import_level'],
	import_level: null,
	place: null,
	typeOfPlace: null,
	country: null,
	state: null,
	metro: null,
	
	queryParamExists: Ember.computed('import_level', 'country', 'state', 'metro', function(){
		var import_level = this.get('import_level');
		var country = this.get('country');
		var state = this.get('state');
		var metro = this.get('metro');

		if (import_level || country || state || metro){
			console.log("true");
			return true;
		}
	}),
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
		transitionToLocationFilter: function(country, state, metro){
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
			// var placeString= place.replace(" ", "%20");
			this.set('place', place);
			this.set('typeOfPlace', typeOfPlace);
			if (typeOfPlace === "country"){
				this.set('country', this.place);
				this.set('state', null);
				this.set('metro', null);
			} else if (typeOfPlace === "state"){
				this.set('country', null);
				this.set('state', this.place);
				this.set('metro', null);
			} else if (typeOfPlace === "metro"){
				this.set('country', null);
				this.set('state', null);
				this.set('metro', this.place);
			}
		}
	}
});
