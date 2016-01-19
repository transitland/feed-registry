import Ember from 'ember';

export default Ember.Service.extend({
	store: Ember.inject.service(),
	feedModel: null,
	createFeedModel: function() {
		var newFeedModel = this.get('store').createRecord('feed', { });
		this.set('feedModel', newFeedModel);
    return newFeedModel;
	},
	toChangeset: function() {
		var feedModel = this.get('feedModel');
		var changes = [];
		feedModel.get('operators').map(function(operator) {
			if (operator.get('include_in_changeset') === true) {
				console.log("operator added to changeset: " + operator.get('name'));
				changes.push({action:'createUpdate', operator:operator.toChange()});
			}
		});
		changes.push({action:'createUpdate', feed:feedModel.toChange()});
			var changeset = this.get('store').createRecord('changeset', {
				notes: 'This is a test. TODO put a custom message here.',
				payload: {
					changes: changes
				}
		});
		return changeset;
	}
});
