import Ember from 'ember';

export default Ember.Route.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),

	model: function() {
  		var feedModel = this.get('createFeedFromGtfsService').getFeedOrTransitionToStart();
		return {
			feed: feedModel,
			user: this.get('createFeedFromGtfsService').userModel
		};
	}
});