import Ember from 'ember';

export default Ember.Controller.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  actions: {
    next: function() {
      if (this.get('createFeedFromGtfsService').downloadGtfsArchiveAndParseIntoFeedModel()) {
        this.transitionToRoute('feeds.new.add-operator');
      } else {
        alert('TODO: replace me with a nicer error message');
      }
    }
  }
});
