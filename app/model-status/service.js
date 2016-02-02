import Ember from 'ember';

export default Ember.Service.extend({
	store: Ember.inject.service(),
	operators: this.store.get('this.model.operators'),
	checkModelStatus: function(){
		if (this.operators <= 1){
			console.log("model status");
		}
	}


// set up function on the service to check if there is a feed model that comes back with the service.
// if there's not, then transition user to URL page



});