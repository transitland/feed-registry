import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr', 
  requiresAttribution: function(){
  	if (this.get('license_attribution') == "required"){
  		console.log("required")
  		return true;
  	};
  }.property('license_attribution')
});