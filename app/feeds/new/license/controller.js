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
  })
});
