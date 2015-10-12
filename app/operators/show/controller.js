import Ember from 'ember';

export default Ember.Controller.extend({
	operatorFeeds: Ember.computed.mapBy('model','feed')
});