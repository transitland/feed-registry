import Ember from 'ember';

export default Ember.Route.extend({
	operators: function() {
		return this.store.find('operator');
	}
});
