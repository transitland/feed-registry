import Ember from 'ember';

export default Ember.Component.extend({
	sortProperties: ['name'],
    sortedOperators: Ember.computed.sort('operators', 'sortProperties'),
    nameSortClass: Ember.computed('sortProperties', function() {
        if (this.get('sortProperties')[0] === 'name') {
            return 'sort-down';
        } else if (this.get('sortProperties')[0] === 'name:desc') {
            return 'sort-up';
        } else {
            return 'not-sorted';
        }
    }),
    regionSortClass: Ember.computed('sortProperties', function() {
        if (this.get('sortProperties')[0] === 'metro') {
            return 'sort-down';
        } else if (this.get('sortProperties')[0] === 'metro:desc') {
            return 'sort-up';
        } else {
            return 'not-sorted';
        }
    }),

    stateSortClass: Ember.computed('sortProperties', function() {
        if (this.get('sortProperties')[0] === 'state') {
            return 'sort-down';
        } else if (this.get('sortProperties')[0] === 'state:desc') {
            return 'sort-up';
        } else {
            return 'not-sorted';
        }
    }),

    countrySortClass: Ember.computed('sortProperties', function() {
        if (this.get('sortProperties')[0] === 'country') {
            return 'sort-down';
        } else if (this.get('sortProperties')[0] === 'country:desc') {
            return 'sort-up';
        } else {
            return 'not-sorted';
        }
    }),

    actions:{

        sortBy: function(property) {
            if (this.get('sortProperties')[0] === property) {
                this.set('sortProperties', [property + ':desc']);
            } else {
                this.set('sortProperties', [property]);
            }
        } 
    }
});