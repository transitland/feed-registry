import Ember from 'ember';

export default Ember.Component.extend({
	sortProperties: ['name'],
    sortedOperators: Ember.computed.sort('operators', 'sortProperties'),

    actions:{

        sortBy: function(property) {
        	console.log("sortby");
            if (this.get('sortProperties')[0] === property) {
                this.set('sortProperties', [property + ':desc']);
            } else {
                this.set('sortProperties', [property]);
            }
            // this.set('model', this.get('arrangedContent'));  // set the model to the sorted array
        } 
    }
});

// Fix this so that undefined gets sorted as well
// Currently, when there isn't a feed,
// the column won't when the bottom of the list is undefined.