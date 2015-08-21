import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr', 
  requiresAttribution: function(){
  	return this.get('operator.feed.license_attribution') === 'not_required';
  }.property('operator.feed.license_attribution'),
  derivationAllowed: function(){
  	return this.get('operator.feed.license_derivation') === 'allowed';
  }.property('operator.feed.license_derivation'),
  redistributionAllowed: function(){
  	return this.get('operator.feed.license_redistribution') === 'allowed';
  }.property('operator.feed.license_redistribution')
  
});