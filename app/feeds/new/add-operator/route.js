import Ember from 'ember';

export default Ember.Route.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  model: function() {
    var feed = this.get('createFeedFromGtfsService').createOrFindFeedModel();
    // These are fake operators to use for styling the form
    // TODO: remove and replace with operators actually parsed from GTFS
    feed.get('operators').createRecord({
      name: 'BART'
    });
    return feed;
  }
});
