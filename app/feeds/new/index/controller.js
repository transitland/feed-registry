import Ember from 'ember';

export default Ember.Controller.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  actions: {
    next: function() {
      console.log('feeds.new.index');
      this.transitionToRoute('feeds.new.add-operator');
    }
  }
});
