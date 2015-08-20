import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
		return this.store.find('operator', params['name']);
		// return this.store.queryFixtures(records, 'operator', params['name']);
	}
});
