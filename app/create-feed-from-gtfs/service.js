import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  feedModel: null,
  createOrFindFeedModel: function() {
    if (this.get('feedModel') == null) {
      var newFeedModel = this.get('store').createRecord('feed', { });
      this.set('feedModel', newFeedModel);
    }
    return this.get('feedModel');
  },
  downloadGtfsArchiveAndParseIntoFeedModel: function() {
    var feedModel = this.createOrFindFeedModel();
    // var url = 'http://www.caltrain.com/Assets/GTFS/caltrain/GTFS-Caltrain-Devs.zip';
    var url = feedModel.get('url');
    var adapter = this.get('store').adapterFor('fetch_info');
    var fetch_info_url = adapter.urlPrefix()+'/fetch_info';
    var promise = adapter.ajax(fetch_info_url, 'post', {data:{url:url}});
    promise.then(function(response) {
      response.operators.map(function(operator){
        feedModel.addOperator(operator)
      });
    });
    return promise
  }
});
