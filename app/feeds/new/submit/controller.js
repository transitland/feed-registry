import Ember from 'ember';

export default Ember.Controller.extend({
	agreeToTerms: false,
	createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
		actions: {
			submit: function() {
				var changeset = this.get('createFeedFromGtfsService').toChangeset();
				console.log(changeset);
				var controller = this;
				changeset.save().then(function(){
					controller.transitionToRoute('feeds.new.success');
				}).catch(function(){
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
				console.log('agreeToTerms: ' + this.agreeToTerms);
			}
		}
});
