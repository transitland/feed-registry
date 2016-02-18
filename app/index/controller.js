// import Ember from 'ember';
// import ENV from 'feed-registry/config/environment';


// export default Ember.Controller.extend({
// 	editingMode: Ember.computed(function(){
// 		return ENV.allowEditingMode;
// 	})
// });

import Ember from 'ember';
import PaginatedController from 'feed-registry/mixins/paginated-controller';
import ENV from 'feed-registry/config/environment';


export default Ember.Controller.extend(PaginatedController, {
	editingMode: Ember.computed(function(){
		return ENV.allowEditingMode;
	})
});


// import Ember from 'ember';
// import PaginatedController from 'dispatcher/mixins/paginated-controller';

// export default Ember.Controller.extend(PaginatedController, {
// });