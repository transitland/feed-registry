import Ember from 'ember';

export default Ember.Route.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  model: function() {
    var feed = this.get('createFeedFromGtfsService').createOrFindFeedModel();
    // These are fake operators to use for styling the form
    // TODO: remove and replace with operators actually parsed from GTFS
    feed.get('operators').createRecord({
      name: 'Bay Area Rapid Transit',
      short_name: 'BART',
      country: 'United States',
      state: 'California',
      metro: 'San Francisco Bay Area',
      website: 'www.bart.com',
      timezone: 'PCT'


    });
    return feed;
  }
});
