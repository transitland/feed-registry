import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  feedModel: null,
  userModel: null,
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
      notes: 'This is a test. TODO put a custom message here.',
      payload: {
        changes: changes
      }
    });
		changeset.set('user', this.get('userModel'));
    return changeset;
  }
});

