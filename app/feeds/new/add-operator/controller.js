import Ember from 'ember';

export default Ember.Controller.extend({
	operatorsIncluded: Ember.computed.mapBy('operators', 'include_in_changeset'),
	numberIncluded: Ember.computed.uniq('operatorsIncluded'),

	singleOperator: Ember.computed('model.operators_in_feed', function(){
		if (this.minimumOperator !== 0){
			console.log("minimumOperator !== 0");
			console.log("operatorsIncluded: " + operatorsIncluded);
		}
		return this.get('model.operators_in_feed').length === 1;
	}),

	// minimumOperator: Ember.computed('this.model.operator.@each.include_in_changeset', function(){
	// 	return this.operator.filterBy('this.model.operator.include_in_changeset', true).get('length') >= 1; 
	// })
	minimumOperator: function() {
		var operators = this.get('model.operators');

		// console.log('minimumOperator: ' + operators.filterBy('include_in_changeset', true).get('length'));
		return operators.filterBy('include_in_changeset', true).get('length');
	}.property()
});


