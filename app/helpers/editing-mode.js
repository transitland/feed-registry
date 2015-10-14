import Ember from 'ember';
import ENV from 'feed-registry/config/environment';


export default Ember.Handlebars.registerBoundHelper('editng-mode',function() {
	return ENV.allowEditingMode;
});
