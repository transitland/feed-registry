import Ember from 'ember';

export default Ember.Route.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  beforeModel: function(transition) {
    var controller = this;
    var feedModel = this.get('createFeedFromGtfsService').feedModel;
    var url = feedModel.get('url');
    var adapter = this.get('store').adapterFor('feeds');
    var fetch_info_url = adapter.urlPrefix()+'/feeds/fetch_info';
    var promise = adapter.ajax(fetch_info_url, 'post', {data:{url:url}});
    promise.then(function(response) {
      if (response.status == 'complete') {
        feedModel.set('id', response.feed.onestop_id);
        feedModel.set('operators_in_feed', response.feed.operators_in_feed);
        response.operators.map(function(operator){feedModel.addOperator(operator)});
        return feedModel;
      } else if (response.status == 'processing') {
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
