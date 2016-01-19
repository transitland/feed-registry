import Ember from 'ember';

export default Ember.Controller.extend({

	numberOfOperators: Ember.computed('model.operators_in_feed', function(){
		return this.get('model.operators_in_feed').length === 1;
	})

});
