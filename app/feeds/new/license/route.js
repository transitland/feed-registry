import Ember from 'ember';

export default Ember.Route.extend({
	createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
	modelStatus: Ember.inject.service('model-status'),

	model: function() {
		console.log("status: " + this.get('modelStatus').operators);
		return this.get('createFeedFromGtfsService').feedModel;
	}
});
