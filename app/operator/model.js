import Ember from 'ember';
import DS from 'ember-data';
import _ from 'npm:lodash';

var Operator = DS.Model.extend({
	feeds: DS.hasMany('feed', { async: true }),
	identifiers: DS.attr(),
	name: DS.attr('string'),
	short_name: DS.attr('string'),
	onestop_id: Ember.computed.alias('id'),
	country: DS.attr('string'),
	state: DS.attr('string'),
	metro: DS.attr('string'),
	website: DS.attr('string'),
	timezone: DS.attr('string'),
	created_at: DS.attr('date'),
	updated_at: DS.attr('date'),
  geometry: DS.attr(),
  tags: DS.attr(),
	toChange: function() {
		var operatorJson = this.toJSON();
		operatorJson.onestopId = this.id;
		// remove attributes that don't need to be submitted to server
		operatorJson = _.omit(operatorJson, ['created_at', 'updated_at', 'feeds']);
		// remove any attributes with null values, undefined values, or empty strings
		operatorJson = _.omit(operatorJson, function(value) {
			return value === null || value === '' || value === undefined;
		});
    return operatorJson;
	}
});


export default Operator;
