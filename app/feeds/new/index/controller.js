import Ember from 'ember';

export default Ember.Controller.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  progressStatus: null,
  progress: null,
 
  actions: {
    next: function() {
      this.toggleProperty('isLoading');
      this.transitionToRoute('feeds.new.add-operator');
    },
    updateProgress: function(status, progress) {
	    this.set('progressStatus', status);
	    this.set('progress', progress);
  	}
  }

});
