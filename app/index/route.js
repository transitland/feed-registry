import Ember from 'ember';
import PaginatedRoute from 'feed-registry/mixins/paginated-route';

export default Ember.Route.extend(PaginatedRoute, {
	model: function(params) {
		return this.store.query('operator', params);
	}
});