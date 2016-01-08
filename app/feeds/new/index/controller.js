import Ember from 'ember';

export default Ember.Controller.extend({
  createFeedFromGtfsService: Ember.inject.service('create-feed-from-gtfs'),
  actions: {
    next: function() {
      var controller = this;
      this
        .get('createFeedFromGtfsService')
        .downloadGtfsArchiveAndParseIntoFeedModel()
        .then(function(){
          controller.transitionToRoute('feeds.new.add-operator');
        })
        .catch(function(){
          alert('Error');
          // controller.transitionToRoute('error');
        });
    }
  }
});
