import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr', 
  requiresAttribution: function(){
  	return this.get('operator.feed.license_attribution') === 'not_required';
  }.property('license_attribution', 'license_attribution.[]'),
  derivationAllowed: function(){
  	return this.get('operator.feed.license_derivation') === 'allowed';
  }.property('license_derivation'),
  redistributionAllowed: function(){
  	return this.get('operator.feed.license_redistribution') === 'allowed';
  }.property('license_redistribution')
  
});