import Ember from 'ember';

export default Ember.Controller.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  actions: {
    next: function() {
      this.transitionToRoute('feeds.new.add-operator');
    }
  }
});
