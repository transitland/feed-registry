import Ember from 'ember';

export default Ember.Route.extend({
	createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
	model: function() {
    var oldModel = this.get('createFeedFromGtfsService').feedModel;
    this.store.unloadAll();
    var newModel = this.get('createFeedFromGtfsService').createFeedAndUserModels().feed;
    // Copy over previous url & errors
    if (oldModel != null && oldModel.get('errors.length') > 0) {
      newModel.set('url', oldModel.get('url'));
      oldModel.get('errors').errorsFor('url').forEach(function(error){
        newModel.get('errors').add(error.attribute, error.message);
      });
    }
    return newModel
	},
  resetController: function(controller, isExiting, transition) {
    // Reset the controller loading state before transition
    controller.set('isLoading', false);
  }
});
