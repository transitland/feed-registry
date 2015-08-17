import Ember from 'ember';

export default Ember.Controller.extend({
	operatorCountries: Ember.computed.mapBy('model', 'country'),
     uniqueOperatorCountries: Ember.computed.uniq('operatorCountries')
});
