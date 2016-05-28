import Ember from 'ember';
import DS from 'ember-data';
import _ from 'npm:lodash';
import centroid from 'npm:turf-centroid';

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
	include_in_changeset: DS.attr('boolean', { defaultValue: true }),
	geometry: DS.attr(),
	tags: DS.attr(),
	toChange: function() {
		var operatorJson = {};
    // Map Ember data attributes to Operator Schema
		operatorJson.onestopId = this.id;
		operatorJson.name = this.get('name');
		operatorJson.shortName = this.get('short_name');
		operatorJson.country = this.get('country');
		operatorJson.state = this.get('state');
		operatorJson.metro = this.get('metro');
		operatorJson.website = this.get('website');
		operatorJson.timezone = this.get('timezone');
		operatorJson.geometry = this.get('geometry');
		operatorJson.identifiers = this.get('identifiers');
		operatorJson.tags = this.get('tags');
		// remove any attributes with null values, undefined values, or empty strings
		operatorJson = _.omit(operatorJson, function(value) {
			return value === null || value === '' || value === undefined;
		});
		return operatorJson;
	},
  centroid: Ember.computed('geometry', function () {
    let geometry = this.get('geometry');
    if (Ember.isPresent(geometry)) {
      var operatorCentroid = centroid({
        "type": "Feature",
        "properties": {},
        "geometry": geometry
      });
      return operatorCentroid.geometry.coordinates;
    }
   })
});


export default Operator;
