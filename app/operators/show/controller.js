import Ember from 'ember';

export default Ember.Controller.extend({
  // TODO: check import level across all feeds associated with an operator, not just the first
  operatorFirstFeed: Ember.computed.alias('model.feeds.firstObject'),
  linkToTurnByTurnDemo: Ember.computed('model.centroid', 'operatorFirstFeed.isAtLeastImportLevelFour', function () {
    if (this.get('operatorFirstFeed.isAtLeastImportLevelFour')) {
      let centroid = this.get('model.centroid');
      return 'http://valhalla.github.io/demos/routing/#loc=13,' + centroid[1] + ',' + centroid[0];
    }
  })
});
