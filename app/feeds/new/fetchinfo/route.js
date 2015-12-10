import Ember from 'ember';

export default Ember.Route.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  afterModel: function(resolvedModel, transition) {
    console.log('feeds.new.fetchinfo afterModel');
    this.transitionTo('feeds.new.add-operator');
  },
  model: function(params, transition) {
    console.log('feeds.new.fetchinfo model');
    var controller = this;
    var feedModel = this.get('createFeedFromGtfsService').createOrFindFeedModel();
    var url = feedModel.get('url');
    var adapter = this.get('store').adapterFor('feeds');
    var fetch_info_url = adapter.urlPrefix()+'/feeds/fetch_info';
    var promise = adapter.ajax(fetch_info_url, 'post', {data:{url:url}});
    promise.then(function(response) {
      console.log('feeds.new.fetchinfo response:', response.status);
      if (response.status == 'complete') {
        feedModel.set('id', response.feed.onestop_id);
        response.operators.map(function(operator){feedModel.addOperator(operator)});
        return feedModel;
      } else if (response.status == 'processing') {
        transition.abort();
        return Ember.run.later(controller, function(){
          transition.retry({retries: 10});
        }, 1000);
      } else {
        console.log('feeds.new.fetchinfo response error 1');
        return true
      }
    });
    return promise
  },
  actions: {
    loading: function() {
      console.log('feeds.new.fetchinfo loading');
      return true
    },
    error: function() {
      console.log('feeds.new.fetchinfo error');
      this.transitionTo('feeds.new');
      return true
    }
  }
});
