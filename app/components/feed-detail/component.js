import Ember from 'ember';

export default Ember.Component.extend({
  // Ember.computed.gte is a computed property that returns true if the provided dependent property is
  // greater than or equal to the provide value.
  feedImportLevelZero: Ember.computed.gte('feed.import_level_of_active_feed_version', 0),
  feedImportLevelOne: Ember.computed.gte('feed.import_level_of_active_feed_version', 1),
  feedFormatIsGtfsStatic: Ember.computed.equal('feed.type', null),
  showArchivedFeedVersions: false,
  actions: {
    toggleArchivedFeedVersion: function() {
      this.toggleProperty('showArchivedFeedVersions');
    }
  }
});
