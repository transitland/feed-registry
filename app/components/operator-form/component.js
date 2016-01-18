import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		clickYes() {
			this.set('operator.include_in_changeset', true);
		},
		clickNo() {
			this.set('operator.include_in_changeset', false);
		}
	}
});
