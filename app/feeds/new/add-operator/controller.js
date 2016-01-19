import Ember from 'ember';

export default Ember.Controller.extend({

	singleOperator: Ember.computed('model.operators_in_feed', function(){
		if (this.minimumOperator !== 0){
			console.log("minimumOperator !== 0");
		}
		return this.get('model.operators_in_feed').length === 1;
	}),

	// minimumOperator: Ember.computed('this.model.operator.@each.include_in_changeset', function(){
	// 	return this.operator.filterBy('this.model.operator.include_in_changeset', true).get('length') >= 1; 
	// })
	minimumOperator: function() {
		console.log('minimumOperator: ' + this.get('model.operators').filterBy('include_in_changeset', true).get('length'));
		return this.get('model.operators').filterBy('include_in_changeset', true).get('length');
	}.property('model.operators@each.include_in_changeset')
});
