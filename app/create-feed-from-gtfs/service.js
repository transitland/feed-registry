import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  feedModel: null,
  createOrFindFeedModel: function() {
    if (this.get('feedModel') == null) {
      var newFeedModel = this.get('store').createRecord('feed', { });
      this.set('feedModel', newFeedModel);
    }
    return this.get('feedModel');
  }
});
