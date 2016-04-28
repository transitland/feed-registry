import DS from 'ember-data';

export default DS.Model.extend({
	placeName: DS.attr('string'),
	type: DS.attr('string'),
	count: DS.attr('number')
  
});
