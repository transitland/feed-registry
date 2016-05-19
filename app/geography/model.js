import DS from 'ember-data';

export default DS.Model.extend({
	country: DS.attr(),
	state: DS.attr(),
	metro: DS.attr(),
	name: DS.attr(),
	short_name: DS.attr(),
	countryCount: DS.attr()
});
