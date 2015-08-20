import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
		return this.store.find('operator', params['operator_id']);
		// return this.store.queryFixtures(records, 'operator', params['name']);
	}
});
