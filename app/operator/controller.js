import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  actions:{
  	filterBy: function(){
  		console.log("filterBy");
  	}
  }
});