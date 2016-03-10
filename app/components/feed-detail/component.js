import Ember from 'ember';

export default Ember.Component.extend({


	feedImportLevelZero: Ember.computed.gte('feed.import_level_of_active_feed_version', 0),
	feedImportLevelOne: Ember.computed.gte('feed.import_level_of_active_feed_version', 1),
	feedImportLevelTwo: Ember.computed.gte('feed.import_level_of_active_feed_version', 2),
	feedImportLevelFour: Ember.computed.gte('feed.import_level_of_active_feed_version', 4),

	feedImportLevelNull: function() {
		return (this.get('import_level_of_active_feed_version') >= 0);
  	}.property('feed.import_level_of_active_feed_version'),

	scheduleStopPair: Ember.computed.gte('feed.import_level_of_active_feed_version', 2)
	
});
