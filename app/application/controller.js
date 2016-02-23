import Ember from 'ember';


export default Ember.Controller.extend({
	// This is now handled in the router using a didTransition hook
	// currentPathChanged: function () {
	// 	window.scrollTo(0, 0);
	// }.observes('currentPath')
});