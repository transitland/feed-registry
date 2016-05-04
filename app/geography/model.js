import DS from 'ember-data';

export default DS.Model.extend({
	country: DS.attr(),
	state: DS.attr(),
	metro: DS.attr()  
});
