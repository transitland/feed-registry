import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr', 

  licenseHasName: function(){
    if (this.get('operator.feeds.firstObject.license_name') !== undefined){
      return true;
    } 
  }.property('operator.feeds.firstObject.license_name'),

  requiresAttribution: function(){
  	return this.get('operator.feeds.firstObject.license_attribution') === 'not_required';
  }.property('operator.feeds.license_attribution'),
  attributionUnknown: function(){
    return this.get('operator.feeds.firstObject.license_attribution') === undefined;
  }.property('operator.feeds.firstObject.license_attribution'),

  derivationAllowed: function(){
  	return this.get('operator.feeds.firstObject.license_derivation') === 'allowed';
  }.property('operator.feeds.firstObject.license_derivation'),
  derivationUnknown: function(){
    return this.get('operator.feeds.firstObject.license_derivation') === undefined;
  }.property('operator.feeds.firstObject.license_derivation'),


  redistributionAllowed: function(){
  	return this.get('operator.feeds.firstObject.license_redistribution') === 'allowed';
  }.property('operator.feeds.firstObject.license_redistribution'),
  redistributionUnknown: function(){
    return this.get('operator.feeds.firstObject.license_redistribution') === undefined;
  }.property('operator.feeds.firstObject.license_redistribution')
  
});