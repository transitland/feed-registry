// import Ember from 'ember';


// export default Ember.Route.extend({
// 	model: function() {

// 		return Ember.RSVP.hash({
//             operators: this.store.findAll('operator'),
//             feeds: this.store.findAll('feed')
//         });
// 	}
// });

import Ember from 'ember';
import PaginatedRoute from 'feed-registry/mixins/paginated-route';

export default Ember.Route.extend({
	model: function(params) {

		return Ember.RSVP.hash({
            operators: this.store.query('operator', params),
            feeds: this.store.query('feed', params)
        });
	}
});
