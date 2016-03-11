import Ember from 'ember';

export default Ember.Component.extend({
	feedImportLevelZero: Ember.computed.gte('feed.import_level_of_active_feed_version', 0),
	feedImportLevelOne: Ember.computed.gte('feed.import_level_of_active_feed_version', 1),

});
