import Ember from 'ember';

export default Ember.Controller.extend({
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
  },
  resetLicense: function(){
    this.resetInterpretations();
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