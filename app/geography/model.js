import DS from 'ember-data';

export default DS.Model.extend({
	// placeName: DS.attr(),
	country: DS.attr(),
	state: DS.attr(),
	metro: DS.attr()
	// type: DS.attr(),
	// count: DS.belongsTo()
  
});
