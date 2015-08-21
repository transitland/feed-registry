import Ember from 'ember';

export default Ember.Component.extend({
	sortProperties: [],
    sortAscending: false,

    actions:{

        sortBy: function(property) {
        	console.log("sortby");
            this.set('sortProperties', [property]);
            this.toggleProperty('sortAscending');
            this.set('model', this.get('arrangedContent'));  // set the model to the sorted array
        } 
    }
});