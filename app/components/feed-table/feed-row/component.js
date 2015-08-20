import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr', 
  requiresAttribution: function(){
  	return this.get('operator.feed.license_attribution') === 'not_required';
  },
  derivationAllowed: function(){
  	return this.get('operator.feed.license_derivation') === 'allowed';
  },
  redistributionAllowed: function(){
  	return this.get('operator.feed.license_redistribution') === 'allowed';
  }
  
});