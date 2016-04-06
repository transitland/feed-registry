import Ember from 'ember';

export default Ember.Component.extend({
	importLevelFilterExists: function(){
		return this.get('import_level');
	}.property('import_level'),

	feedImportLevelZero: Ember.computed.gte('import_level', 0),
	feedImportLevelOne: Ember.computed.gte('import_level', 1),
	feedImportLevelTwo: Ember.computed.gte('import_level', 2),
	feedImportLevelFour: Ember.computed.gte('import_level', 4),

});

