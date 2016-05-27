import Ember from 'ember';
import PaginatedOrderedRoute from 'feed-registry/mixins/paginated-ordered-route';

export default Ember.Route.extend(PaginatedOrderedRoute, {
  queryParams: {
    import_level: {
      refreshModel: true
    },
    country: {
      refreshModel: true
    },
    state: {
      refreshModel: true
    },
    metro: {
      refreshModel: true
    },
    name: {
      refreshModel: true
    },
    short_name: {
      refreshModel: true
    }
  },
  model: function (params) {
    params.total = true; // request the total number of operators in the response
    return this.store.query('operator', params);
  }
});
