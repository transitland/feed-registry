import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  feedModel: null,
  createFeedModel: function() {
    var newFeedModel = this.get('store').createRecord('feed', { });
      this.set('feedModel', newFeedModel);
  },
  downloadGtfsArchiveAndParseIntoFeedModel: function(retries) {
    retries = (retries || 60);
    if (retries-- <= 0) {
      throw "Timeout";
    }
    var feedModel = this.get('feedModel');
    var url = feedModel.get('url');
    var adapter = this.get('store').adapterFor('feeds');
    var fetch_info_url = adapter.urlPrefix()+'/feeds/fetch_info';
    var controller = this;
    var promise = adapter.ajax(fetch_info_url, 'post', {data:{url:url}});
    promise.then(function(response) {
      if (response.status == 'complete') {
        feedModel.set('id', response.feed.onestop_id);
        feedModel.set('operators_in_feed', response.feed.operators_in_feed);
        return response.operators.map(function(operator){feedModel.addOperator(operator)});
      } else if (response.status == 'processing') {
        return Ember.run.later(controller, function(){this.downloadGtfsArchiveAndParseIntoFeedModel(retries)}, 1000);
      }
    });
    return promise;
  },
	toChangeset: function() {
    var feedModel = this.get('feedModel');
    var changes = [];
    feedModel.get('operators').map(function(operator){
      changes.push({action:'createUpdate', operator:operator.toChange()})
    });
    changes.push({action:'createUpdate', feed:feedModel.toChange()})
		var changeset = this.get('store').createRecord('changeset', {
			notes: 'This is a test. TODO put a custom message here.',
			payload: {
				changes: changes
			}
		});
		return changeset;
	}
});
