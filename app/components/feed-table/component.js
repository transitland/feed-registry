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

    actions:{

        sortBy: function(property) {
        	console.log("sortby");
            if (this.get('sortProperties')[0] === property) {
                this.set('sortProperties', [property + ':desc']);
                console.log("descending");
            } else {
                this.set('sortProperties', [property]);
                console.log("ascending");
            }
        } 
    }
});