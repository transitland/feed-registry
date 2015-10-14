import Ember from 'ember';
import ENV from 'feed-registry/config/environment';


export default Ember.Controller.extend({
	editingMode: Ember.computed(function(){
		// console.log("env: "+ENV.environment);
		return ENV.allowEditingMode;
	})
});
