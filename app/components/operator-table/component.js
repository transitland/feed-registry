import Ember from 'ember';

export default Ember.Component.extend({

    placeOrName: null,
    typeOfPlaceOrName: null,




    queryParamExists: Ember.computed('import_level', 'country', 'state', 'metro', 'name', 'short_name', function(){
        var import_level = this.get('import_level');
        var country = this.get('country');
        var state = this.get('state');
        var metro = this.get('metro');
        var name = this.get('name');
        var short_name = this.get('short_name');

        if (import_level || country || state || metro || name || short_name){
            return true;
        }
    }),
 
    nameSortClass: Ember.computed('sortKey', 'sortOrder', function() {
        if (this.get('sortKey') === 'name' && this.get('sortOrder') === 'asc') {
            return 'sort-down';
        } else if (this.get('sortKey') === 'name' && this.get('sortOrder') === 'desc') {
            return 'sort-up';
        } else {
            return 'not-sorted';
        }
    }),
    regionSortClass: Ember.computed('sortKey', 'sortOrder', function() {
        if (this.get('sortKey') === 'metro' && this.get('sortOrder') === 'asc') {
            return 'sort-down';
        } else if (this.get('sortKey') === 'metro'&& this.get('sortOrder') === 'desc') {
            return 'sort-up';
        } else {
            return 'not-sorted';
        }
    }),

    stateSortClass: Ember.computed('sortKey', 'sortOrder', function() {
        if (this.get('sortKey') === 'state'&& this.get('sortOrder') === 'asc') {
            return 'sort-down';
        } else if (this.get('sortKey') === 'state'&& this.get('sortOrder') === 'desc') {
            return 'sort-up';
        } else {
            return 'not-sorted';
        }
    }),

    countrySortClass: Ember.computed('sortKey', 'sortOrder', function() {
        if (this.get('sortKey') === 'country'&& this.get('sortOrder') === 'asc') {
            return 'sort-down';
        } else if (this.get('sortKey') === 'country'&& this.get('sortOrder') === 'desc') {
            return 'sort-up';
        } else {
            return 'not-sorted';
        }
    }),

    filterByPlaceOrName: function(placeOrName, typeOfPlaceOrName){
        this.set('placeOrName', placeOrName);
        this.set('typeOfPlaceOrName', typeOfPlaceOrName);
        if (typeOfPlaceOrName === "country"){
            this.set('country', this.placeOrName);
            this.set('state', null);
            this.set('metro', null);
            this.set('name', null);
            this.set('short_name', null);
        } else if (typeOfPlaceOrName === "state"){
            this.set('country', null);
            this.set('state', this.placeOrName);
            this.set('metro', null);
            this.set('name', null);
            this.set('short_name', null);
        } else if (typeOfPlaceOrName === "metro"){
            this.set('country', null);
            this.set('state', null);
            this.set('metro', this.placeOrName);
            this.set('name', null);
            this.set('short_name', null);
        } else if (typeOfPlaceOrName === "name"){
            this.set('country', null);
            this.set('state', null);
            this.set('metro', null);
            this.set('name', this.placeOrName);
            this.set('short_name', null);
        } else if (typeOfPlaceOrName === "short_name"){
            this.set('country', null);
            this.set('state', null);
            this.set('metro', null);
            this.set('name', null);
            this.set('short_name', this.placeOrName);
        }
    },
    
    actions:{
        changeSort: function(sortKey) {
            if (this.get('sortKey') !== sortKey){
                var sortOrder = 'asc';
            }
            else if (this.get('sortOrder') === 'desc') {
                var sortOrder = 'asc';
            } else {
                var sortOrder = 'desc';
            }
            this.sendAction('changeSort', sortOrder, sortKey);
        },
        resetPlaceOrName: function(){
          this.sendAction('resetPlaceOrName', "null");
        }
    }


});