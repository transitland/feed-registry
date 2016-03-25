import Ember from 'ember';

export default Ember.Route.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  beforeModel: function(transition) {
    var controller = this;
    var feedsIndexController = this.controllerFor('feeds.new.index');
    var feedsController = this.controllerFor('feeds.new');
    var feedModel = this.get('createFeedFromGtfsService').feedModel;
    var url = feedModel.get('url');
    var adapter = this.get('store').adapterFor('feeds');
    var fetch_info_url = adapter.urlPrefix()+'/feeds/fetch_info';
    var promise = adapter.ajax(fetch_info_url, 'post', {data:{url:url}});
    promise.then(function(response) {
      if (response.status === 'complete') {
        feedModel.set('geometry', response.feed.geometry);
        feedModel.set('id', response.feed.onestop_id);
        feedModel.set('tags', response.feed.tags);
        feedModel.set('operators_in_feed', response.feed.operators_in_feed);
        response.operators.map(function(operator){feedModel.addOperator(operator);});

        if ((response.warnings).length >= 1){
          feedsController.set('feedExists', true);
        } else if ((response.warnings).length === 0){
          feedsController.set('feedExists', false);
        }
        
        return feedModel;
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
    }).catch(function(error) {
      error.errors.forEach(function(error){
        feedModel.get('errors').add('url', error.message);
      });
    });
    return promise;
  },
  model: function() {
    return this.get('createFeedFromGtfsService').feedModel;
  },
  actions: {
    error: function(error, transition) {
      return this.transitionTo('feeds.new');
    }
  }
});
