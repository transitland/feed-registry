import Ember from 'ember';

export default Ember.Controller.extend({
	// queryParams: ['q'],
	operatorFeeds: Ember.computed.mapBy('model','feed')

 
	// actions:{
	// 	filterBy: function(){
	// 		console.log("filterBy");
	// 	}
	// }
});