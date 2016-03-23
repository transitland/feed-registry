import Ember from 'ember';

export default Ember.Controller.extend({
  feedsController: Ember.inject.controller('feeds.new'),
  feedExists: Ember.computed.reads('feedsController.feedExists'),
  license_present_mode: false,
  interpret_license_mode: false,
  showLicenseAttributionText: Ember.computed('model.license_use_without_attribution', function() {
    if (this.get('model.license_use_without_attribution') === 'no') {
      return true;
    } else {
      this.set('model.license_attribution_text', null);
      return false;
    }
  }),
  resetInterpretations: function(){
      this.set('model.license_use_without_attribution', null);
      this.set('model.license_create_derived_product', null);
      this.set('model.license_redistribute', null);
      this.set('model.license_attribution_text', null);
  },
  resetLicense: function(){
    this.resetInterpretations();
    this.set('model.license_name', null);
    this.set('model.license_url', null);
    this.interpret_license_mode = false;
  },

  actions: {
    click: function(){
      if (this.license_present_mode === false){
        this.resetLicense();
      } else if (this.interpret_license_mode === false){
        this.resetInterpretations();
      }
    }
  }
});