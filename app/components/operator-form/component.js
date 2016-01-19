import Ember from 'ember';

export default Ember.Component.extend({
	operatorsIncluded: Ember.computed.mapBy('operators', 'name'),
	uniqueOperators: Ember.computed.uniq('operatorsIncluded'),
	operatorsInFeed: Ember.get('this.operatorsInFeed'),
	singleOperator: function(){
		return this.uniqueOperators.length === 1;
		// return true;
	},

	actions: {
		clickYes() {
			this.set('operator.include_in_changeset', true);
		},
		clickNo() {
			this.set('operator.include_in_changeset', false);
		}
	}

});
