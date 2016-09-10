import Ember from 'ember';

export default Ember.Route.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  beforeModel: function(transition) {
    var controller = this;
    var feedsIndexController = this.controllerFor('feeds.new.index');
    var feedsController = this.controllerFor('feeds.new');
    var service = this.get('createFeedFromGtfsService');
    var url = this.get('createFeedFromGtfsService').feedModel.get('url');
    var adapter = this.get('store').adapterFor('feeds');
    var fetch_info_url = adapter.urlPrefix()+'/feeds/fetch_info';
    var promise = adapter.ajax(fetch_info_url, 'post', {data:{url:url}});
    promise.then(function(response) {
      if (response.status === 'complete') {
        if ((response.warnings).length >= 1){
          feedsController.set('feedExists', true);
        } else if ((response.warnings).length === 0){
          feedsController.set('feedExists', false);
        }
        return service.parseFetchInfoResponse(response);
      } else {
        // progress bar
        var status = null;
        var progress = null;

        if (isNaN(response.progress)){
          progress = "";
        } else if (response.progress === 0){
          progress = "";
        } else {
          progress = Math.floor(response.progress * 100) + "%";
        }

        if (response.status === "queued"){
          status =  "Queued...";
        } else if (response.status === "downloading"){
          status = "Downloading (step 1 of 3)...";
        } else if (response.status === "parsing") {
          status = "Parsing (step 2 of 3)...";
        } else {
          status = "Processing (step 3 of 3)...";
        }

        feedsIndexController.send("updateProgress", status, progress);

        transition.abort();
        return Ember.run.later(controller, function(){
          transition.retry();
        }, 1000);
      }
    }).catch(function(response) {
      return service.parseFetchInfoErrors(response);
    });
    return promise;
  },
  model: function() {
    return this.get('createFeedFromGtfsService').feedModel;
  },
  actions: {
    error: function(error, transition) {
      // If there was a feedUrl query parameter, clear it out.
      // It's already been set on the feed model.
      return this.transitionTo('feeds.new', { queryParams: { feedUrl: 'null' }});
    }
  }
});
