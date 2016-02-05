import Ember from 'ember';

export default Ember.Route.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),

  model: function() {
		return this.get('createFeedFromGtfsService').getFeedOrTransitionToStart();
	}
});