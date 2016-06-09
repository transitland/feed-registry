import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    feedUrl: {
      refreshModel: true
    }
  },

	createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
	model: function(params) {
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
    // check for a feedUrl specified in query parameter
    // in the case of editing an existing feed or
    // an outside link-in with feedUrl specified
    if (params.hasOwnProperty('feedUrl') && Ember.isPresent(params.feedUrl)) {
      newModel.set('url', params.feedUrl);
    }
    return newModel;
	},
  resetController: function(controller, isExiting, transition) {
    // Reset the controller loading state before transition
    controller.set('isLoading', false);
    controller.set('progress', null);
    controller.set('progressStatus', null);
  }
});
