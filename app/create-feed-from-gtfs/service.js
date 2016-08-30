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
    var feed_data = store.normalize('feed', response.feed);
    var feedModel = existing.contains(response.feed.onestop_id) ? store.push('feed', feed_data) : store.createRecord('feed', feed_data);
    // Operators
    (response.operators || []).forEach(function(operator) {
      operator.represented_in_feed_onestop_ids = [feedModel.id];
      var operator_data = store.normalize('operator', operator);
      var operatorModel = existing.contains(operator.onestop_id) ? store.push('operator', operator_data) : store.createRecord('operator', operator_data);
    });
    // Refresh the feedModel reference;
    // feedModel = store.peekRecord('feed', feed_onestop_id);
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
    feedModel.get('operators').map(function(operator) {
      if (operator.get('include_in_changeset') === true) {
        changes.push({
          action: 'createUpdate',
          operator: operator.toChange()
        });
      }
    });
    changes.push({
      action: 'createUpdate',
      feed: feedModel.toChange()
    });
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
