import Ember from 'ember';

export default Ember.Controller.extend({
	createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
	  actions: {
	    submit: function() {
	      console.log("SUBMIT");
	      var changeset = this.get('createFeedFromGtfsService').toChangeset();
	      console.log(changeset);
	      var controller = this;
	      changeset.save().then(function(){
	        controller.transitionToRoute('feeds.new.success');
	      }).catch(function(){
	        alert('Error with submission');
	      });
	    }
	  }
});
