import Ember from 'ember';
import PaginatedController from 'feed-registry/mixins/paginated-controller';
import ENV from 'feed-registry/config/environment';


export default Ember.Controller.extend(PaginatedController, {
	editingMode: Ember.computed(function(){
		return ENV.allowEditingMode;
	})
});