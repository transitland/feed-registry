import Ember from 'ember';

export default Ember.Route.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  beforeModel: function(transition) {
    console.log('feeds.new.add-operator before-model');
    var controller = this;
    var feedModel = this.get('createFeedFromGtfsService').feedModel;
    var url = feedModel.get('url');
    var adapter = this.get('store').adapterFor('feeds');
    var fetch_info_url = adapter.urlPrefix()+'/feeds/fetch_info';
    var promise = adapter.ajax(fetch_info_url, 'post', {data:{url:url}});
    promise.then(function(response) {
      console.log('feeds.new.add-operator response:', response.status);
      if (response.status == 'complete') {
        feedModel.set('id', response.feed.onestop_id);
        response.operators.map(function(operator){feedModel.addOperator(operator)});
        return feedModel;
      } else if (response.status == 'processing') {
        transition.abort();
        return Ember.run.later(controller, function(){
          transition.retry({retries: 10});
        }, 1000);
      }
    }).catch(function() {
      console.log('feeds.new.add-operator error');
      feedModel.get('errors').add('url','The feed URL is invalid. Please check the link and try again.');
    });
    return promise
  },
  model: function() {
    return this.get('createFeedFromGtfsService').feedModel;
  },
  actions: {
    loading: function() {
      console.log('feeds.new.add-operator loading');
      return true
    },
    error: function(error, transition) {
      console.log('feeds.new.add-operator error');
      this.transitionTo('feeds.new');
      return true
    }
  }

});
