import Ember from 'ember';
import PaginatedOrderedController from 'feed-registry/mixins/paginated-ordered-controller';
import ENV from 'feed-registry/config/environment';


export default Ember.Controller.extend(PaginatedOrderedController, {
	queryParams: ['import_level', 'total'],
	import_level: null,
	placeOrName: null,
	typeOfPlaceOrName: null,
	country: null,
	state: null,
	metro: null,
	name: null,
	short_name: null,
	selected: null,
	total: true,

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

	placesAndNamesModel: Ember.computed(function() {
		return this.store.findAll('geography');
	}),

	getPlaceOrName: Ember.computed('country', 'state', 'metro', 'name', 'short_name', function() {
		this.totalOperators = this.model.meta.total;
	    return this.get('country') || this.get('state') || this.get('metro') || this.get('name') || this.get('short_name')
	}),

	placeOrNameExists: Ember.computed('country', 'state', 'metro', 'name', 'short_name', function() {
	    if(this.get('country') || this.get('state') || this.get('metro') || this.get('name') || this.get('short_name')){
			return true;
		}
	}),

	multipleFeeds: Ember.computed(totalOperators, function(){
		console.log(totalOperators);

		if (this.model.meta.total > 1) {
			return true;
		}
	}),

	actions: {
		resetPlaceOrName: function(){
			this.set('placeOrName', null);
		},

		transitionToNewSort: function(sortOrder, sortKey){
			this.transitionTo({
				queryParams: {
					"sort_order": sortOrder,
					"sort_key": sortKey,
					"offset": 0,
				}
			});
		},
		transitionToLocationOrNameFilter: function(country, state, metro, name, short_name){
			this.transitionTo({
				queryParams: {
					"country": country,
					"state": state,
					"metro": metro,
					"name": name,
					"short_name": short_name
				}
			});
		},

		findPlacesAndNames: function(){
			var placesAndNames = this.store.findAll('geography');
		},

		filterByPlaceOrName: function(placeOrName, typeOfPlaceOrName){
			this.set('placeOrName', placeOrName);
			this.set('typeOfPlaceOrName', typeOfPlaceOrName);
			if (typeOfPlaceOrName === "country"){
				this.set('state', null);
				this.set('metro', null);
				this.set('name', null);
				this.set('short_name', null);
			} else if (typeOfPlaceOrName === "state"){
				this.set('country', null);
				this.set('metro', null);
				this.set('name', null);
				this.set('short_name', null);
			} else if (typeOfPlaceOrName === "metro"){
				this.set('country', null);
				this.set('state', null);
				this.set('name', null);
				this.set('short_name', null);
			} else if (typeOfPlaceOrName === "name"){
				this.set('country', null);
				this.set('state', null);
				this.set('metro', null);
				this.set('short_name', null);
			} else if (typeOfPlaceOrName === "short_name"){
				this.set('country', null);
				this.set('state', null);
				this.set('metro', null);
				this.set('name', null);
			}
			this.set(this.typeOfPlaceOrName, this.placeOrName);
		}
	}
});
