import Ember from 'ember';

export default Ember.Component.extend({

    place: null,

	 
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

    fromPlace: Ember.computed('place', 'typeOfPlace', function(){
        console.log("table place: " + this.get('place'));
        console.log("table typeOfPlace: " + this.get('typeOfPlace'));
        var operatorName = this.get('operators.name');
        console.log(operatorName);
        console.log(this.operators);
        console.log(this.operators.get('name'));
        console.log(this.operator);
        return true;
    }),

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
    }
});