import Ember from 'ember';

export default Ember.Component.extend({
	importLevel: null,
	mulitpleImportLevels: null,

	importLevelFilterExists: function(){
		if (this.importLevel === null){
			this.importLevel = this.get('import_level');
		}
		return this.importLevel;
	}.property('import_level'),

	multipleImportLevelFiltersExist: function(){
		if (this.get('import_level').indexOf(',') >= 1){
			this.multipleImportLevels = this.get('import_level').split(',').map(Number);
			this.import_level = Math.max.apply(Math,this.multipleImportLevels);
			return true;
		}
	}.property('import_level'),

	feedImportLevelZero: Ember.computed.gte('import_level', 0),
	feedImportLevelOne: Ember.computed.gte('import_level', 1),
	feedImportLevelTwo: Ember.computed.gte('import_level', 2),
	feedImportLevelFour: Ember.computed.gte('import_level', 4),

});

