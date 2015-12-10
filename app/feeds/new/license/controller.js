import Ember from 'ember';

export default Ember.Controller.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  showLicenseAttributionText: Ember.computed('model.license_use_without_attribution', function() {
    if (this.get('model.license_use_without_attribution') === 'required') {
      return true;
    } else {
      this.set('model.license_attribution_text', null);
      return false;
    }
  }),
  actions: {
    submit: function() {
      console.log("SUBMIT");
      var changeset = this.get('createFeedFromGtfsService').toChangeset();
      console.log(changeset);
      changeset.save().then(function(){
        controller.transitionToRoute('feeds.new.submit');
      }).catch(function(){
        alert('Error with submission');
      });
    },
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
