import Ember from 'ember';

export default Ember.Component.extend({
	importLevel: null,
	mulitpleImportLevels: null,

	feedImportLevelZero: Ember.computed.gte('import_level', 0),
	feedImportLevelOne: Ember.computed.gte('import_level', 1),
	feedImportLevelTwo: Ember.computed.gte('import_level', 2),
	feedImportLevelFour: Ember.computed.gte('import_level', 4),

	importLevelFilterExists: function(){
		if (this.get('import_level')) {
			this.importLevel = this.get('import_level');
			if (this.importLevel.includes(',')){
				this.multipleImportLevels = this.get('import_level').split(',').map(Number);
				this.importLevel = Math.max.apply(Math,this.multipleImportLevels);
				this.import_level = this.importLevel;
			} else {
				this.import_level = this.importLevel;
			}
			return true;
		}
	}.property('import_level'),

	getPlaceOrName: Ember.computed('country', 'state', 'metro', 'name', 'short_name', function() {
	    return this.get('country') || this.get('state') || this.get('metro') || this.get('name') || this.get('short_name')
	}),

	supportedLevel: function(){
		if (this.import_level >= 0 && this.import_level <= 4){
			return true;
		}
	}.property('import_level')

});
