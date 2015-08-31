import Ember from 'ember';

export default Ember.Component.extend({
	operatorCountries: Ember.computed.mapBy('operators', 'country'),
	uniqueOperatorCountries: Ember.computed.uniq('operatorCountries'),
	singleCountry: function(){
  		return operatorCountries.length === 1;
  	}
});

