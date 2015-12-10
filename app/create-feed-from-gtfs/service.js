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
  },
	toChangeset: function() {
    var feedModel = this.createOrFindFeedModel();
    var changes = [];
    changes.push({action:'createUpdate', feed:feedModel.toChange()})
    feedModel.get('operators').map(function(operator){
      changes.push({action:'createUpdate', operator:operator.toChange()})
    });
		var changeset = this.get('store').createRecord('changeset', {
			notes: 'This is a test. TODO put a custom message here.',
			payload: {
				changes: changes
			}
		});
		return changeset;
	}
});
