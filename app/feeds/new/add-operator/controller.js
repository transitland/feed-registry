import Ember from 'ember';

export default Ember.Controller.extend({
	feedsController: Ember.inject.controller('feeds.new'),
	feedExists: Ember.computed.reads('feedsController.feedExists'),
	operatorsIncluded: Ember.computed.mapBy('model.operators', 'include_in_changeset'),

	singleOperator: Ember.computed('model.operators_in_feed', function(){
		return this.get('model.operators_in_feed').length === 1;
	}),

	minimumOperator: Ember.computed('model.operators.@each.include_in_changeset', function(){
		var operators = this.get('model.operators');
		return operators.filterBy('include_in_changeset', true).get('length'); 
	})
	
});