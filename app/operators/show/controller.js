import Ember from 'ember';

export default Ember.Controller.extend({
	operatorFeeds: Ember.computed.mapBy('model','feed'),
	// Ember.computed.gte is a computed property that returns true if the provided dependent property is 
	// greater than or equal to the provide value.
	feedImportLevelZero: Ember.computed.gte('model.feeds.firstObject.import_level_of_active_feed_version', 0),
	feedImportLevelOne: Ember.computed.gte('model.feeds.firstObject.import_level_of_active_feed_version', 1),
	feedImportLevelTwo: Ember.computed.gte('model.feeds.firstObject.import_level_of_active_feed_version', 2),
	feedImportLevelFour: Ember.computed.gte('model.feeds.firstObject.import_level_of_active_feed_version', 4)
});