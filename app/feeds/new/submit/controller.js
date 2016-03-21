import Ember from 'ember';

export default Ember.Controller.extend({
	feedsController: Ember.inject.controller('feeds.new'),
	feedExists: Ember.computed.reads('feedsController.feedExists'),
	agreeToTerms: false,
	userTypes: [
		"community_builder",
		"data_enthusiast",
		"app_developer",
		"hardware_vendor",
		"consultant",
		"transit_agency_staff",
		"other_public_agency_staff"
	],
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  actions: {
    handleFocus: function(select) {
      select.actions.open();
    },
    submit: function() {
      var controller = this;
      var changeset = controller.get('createFeedFromGtfsService').toChangeset();
      changeset.save().then(function() {
        controller.transitionToRoute('feeds.new.success');
      }).catch(function(error) {
        // TODO: display a better error message
        alert('Error with submission');
      });
    },
    agree: function() {
				if (this.agreeToTerms === false){
					// this.set('agreeToTerms', this.get('value'));
					this.set('agreeToTerms', true);
				} else {
					this.set('agreeToTerms', false);
				}
			}
 	 }
});
