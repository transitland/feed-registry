import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){
		this.store.unloadAll();
	},
	createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
		model: function() {
		this.get('createFeedFromGtfsService').createFeedModel();
		return this.get('createFeedFromGtfsService').feedModel;
	}
});
