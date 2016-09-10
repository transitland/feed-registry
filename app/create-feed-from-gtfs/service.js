import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  feedModel: null,
  userModel: null,
  parseFetchInfoResponse: function(response) {
    var store = this.get('store');
    var existing = response.warnings.map(function(i) {return i.onestop_id});
    // Feeds
    // Note: store.normalize operates in-place!
    var feed_data = store.normalize('feed', response.feed);
    var feedModel = existing.contains(feed_data.id) ? store.push('feed', feed_data) : store.createRecord('feed', feed_data);
    // Operators
    store.unloadAll('operator');
    (response.operators || []).forEach(function(operator) {
      var operator_data = store.normalize('operator', operator);
      operator_data.feeds = [feedModel];
      var operatorModel = existing.contains(operator_data.id) ? store.push('operator', operator_data) : store.createRecord('operator', operator_data);
    });
    // Reset the feedModel reference;
    this.set('feedModel', feedModel);
    return feedModel;
  },
  parseFetchInfoErrors: function(response){
    var feedModel = this.get('feedModel');
    response.errors.forEach(function(error){
      feedModel.get('errors').add('url', error.message);
    });
  },
  createFeedAndUserModels: function() {
    var newFeedModel = this.get('store').createRecord('feed', {});
		var newUserModel = this.get('store').createRecord('user', {});
    this.set('feedModel', newFeedModel);
    this.set('userModel', newUserModel);
    return {
      feed: newFeedModel,
      user: newUserModel
    };
  },
  getFeedOrTransitionToStart: function() {
    if (this.feedModel === null) {
      return this.get('routing').transitionTo('feeds.new');
    } else {
      return this.feedModel;
    }
  },
  toChangeset: function() {
    var feedModel = this.get('feedModel');
    var changes = [];
    feedModel
      .get('operators')
      .filterBy('hasDirtyAttributes', true)
      .filterBy('include_in_changeset', true)
      .map(function(operator) {
        changes.push({
          action: 'createUpdate',
          operator: operator.toChange()
        });
      });
    changes.push({
      action: 'createUpdate',
      feed: feedModel.toChange()
    });
    console.log("Change payload:");
    console.log(changes);
    var changeset = this.get('store').createRecord('changeset', {
      notes: `Changed submitted from Feed Registry for feed at ${feedModel.get('url')}`,
      payload: {
        changes: changes
      }
    });
		changeset.set('user', this.get('userModel'));
    return changeset;
  }
});
