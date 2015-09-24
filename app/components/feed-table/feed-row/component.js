import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr', 

  licenseHasName: function(){
    if (this.get('operator.feeds.firstObject.license_name') !== null){
      return true;
    } 
  }.property('operator.feeds.firstObject.license_name'),

  requiresAttribution: function(){
    return this.get('operator.feeds.firstObject.license_use_without_attribution') === 'yes';
  }.property('operator.feeds.firstObject.license_use_without_attribution'),
  doesNotRequireAttribution: function(){
    return this.get('operator.feeds.firstObject.license_use_without_attribution') === 'no';
  }.property('operator.feeds.firstObject.license_use_without_attribution'),
  attributionUnknown: function(){
    return this.get('operator.feeds.firstObject.license_use_without_attribution') === 'unknown';
  }.property('operator.feeds.firstObject.license_use_without_attribution'),

  derivationAllowed: function(){
  	return this.get('operator.feeds.firstObject.license_create_derived_product') === 'yes';
  }.property('operator.feeds.firstObject.license_create_derived_product'),
  derivationNotAllowed: function(){
    return this.get('operator.feeds.firstObject.license_create_derived_product') === 'no';
  }.property('operator.feeds.firstObject.license_create_derived_product'),
  derivationUnknown: function(){
    return this.get('operator.feeds.firstObject.license_create_derived_product') === 'unknown';
  }.property('operator.feeds.firstObject.license_create_derived_product'),


  redistributionAllowed: function(){
  	return this.get('operator.feeds.firstObject.license_redistribute') === 'yes';
  }.property('operator.feeds.firstObject.license_redistribute'),
  redistributionNotAllowed: function(){
    return this.get('operator.feeds.firstObject.license_redistribute') === 'no';
  }.property('operator.feeds.firstObject.license_redistribute'),
  redistributionUnknown: function(){
    return this.get('operator.feeds.firstObject.license_redistribute') === 'unknown';
  }.property('operator.feeds.firstObject.license_redistribute')
  
});