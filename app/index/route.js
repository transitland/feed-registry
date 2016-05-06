import Ember from 'ember';
import PaginatedOrderedRoute from 'feed-registry/mixins/paginated-ordered-route';

export default Ember.Route.extend(PaginatedOrderedRoute, {
	model: function(params) {
		return this.store.query('operator', params);
	},
	actions: {
		queryParamsDidChange: function(){
			this.refresh();
			// this.set('place', null);
		}
	}
});