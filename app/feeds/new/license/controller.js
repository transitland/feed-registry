import Ember from 'ember';

export default Ember.Controller.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
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
  actions: {
    setAttribution: function(attribution){
      this.model.set("license_use_without_attribution", attribution);
    },
    setCreateDerived: function(derived){
      this.model.set("license_create_derived_product", derived);
    },
    setRedistribute: function(redistribute){
      this.model.set("license_redistribute", redistribute);
    }
  }
});
