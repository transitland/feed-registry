import Ember from 'ember';

export default Ember.Component.extend({
  totalOperators: 0,
  pluralOperators: Ember.computed('totalOperators', function() {
    return (this.totalOperators === 0 || this.totalOperators >= 2);
  }),
  importLevel: null,
  feedImportLevelZero: Ember.computed.gte('importLevel', 0),
  feedImportLevelOne: Ember.computed.gte('importLevel', 1),
  feedImportLevelTwo: Ember.computed.gte('importLevel', 2),
  feedImportLevelFour: Ember.computed.gte('importLevel', 4),
  supportedImportLevel: Ember.computed('importLevel', function() {
		return (this.get('importLevel') >= 0 && this.get('importLevel') <= 4);
	})
});
