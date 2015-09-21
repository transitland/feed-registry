import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr', 

  licenseHasName: function(){
    if (this.get('operator.feed.license_name') != undefined){
      return true;
    } 
  }.property('operator.feed.license_name'),

  requiresAttribution: function(){
  	return this.get('operator.feed.license_attribution') === 'not_required';
  }.property('operator.feed.license_attribution'),
  attributionUnknown: function(){
    return this.get('operator.feed.license_attribution') === undefined;
  }.property('operator.feed.license_attribution'),

  derivationAllowed: function(){
  	return this.get('operator.feed.license_derivation') === 'allowed';
  }.property('operator.feed.license_derivation'),
  derivationUnknown: function(){
    return this.get('operator.feed.license_derivation') === undefined;
  }.property('operator.feed.license_derivation'),


  redistributionAllowed: function(){
  	return this.get('operator.feed.license_redistribution') === 'allowed';
  }.property('operator.feed.license_redistribution'),
  redistributionUnknown: function(){
    return this.get('operator.feed.license_redistribution') === undefined;
  }.property('operator.feed.license_redistribution')
  
});