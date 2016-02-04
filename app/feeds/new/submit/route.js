import Ember from 'ember';

export default Ember.Route.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
	model: function() {
  		var feed = this.get('createFeedFromGtfsService').feedModel;
    	var user = this.get('createFeedFromGtfsService').userModel;
    	if (feed == null) {
    		this.transitionTo('feeds.new');
			}
		return;
  	}
});