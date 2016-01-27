import Ember from 'ember';

export default Ember.Component.extend({
	operatorCountries: Ember.computed.mapBy('operators', 'country'),
	uniqueOperatorCountries: Ember.computed.uniq('operatorCountries'),
	singleCountry: Ember.computed (function(){
		return this.get('uniqueOperatorCountries.length') === 1;
	})
});

