import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){
		// this.store.unloadAll();
	},
	createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
		model: function() {
      console.log('feeds.new.index model');
      var oldModel = this.get('createFeedFromGtfsService').feedModel;
      this.store.unloadAll();
      var newModel = this.get('createFeedFromGtfsService').createFeedModel();
      if (oldModel != null && oldModel.get('errors.length') > 0) {
        console.log('setting url:', oldModel.get('url'));
        newModel.set('url', oldModel.get('url'));
        oldModel.get('errors').errorsFor('url').forEach(function(error){
          console.log(error.attribute, error.message);
          newModel.get('errors').add(error.attribute, error.message);
        });
      }
      return newModel
	}
});
