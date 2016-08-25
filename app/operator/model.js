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
    var changed_key_map = {
      name: 'name',
      short_name: 'shortName',
      country: 'country',
      state: 'state',
      metro: 'metro',
      website: 'website',
      timezone: 'timezone',
      geometry: 'geometry',
      tags: 'tags',
    }
    var change = {};
    change.onestopId = this.id;
    var changed_attributes = this.changedAttributes();
    for (var changed_key in changed_attributes) {
      var old_value = changed_attributes[changed_key][0];
      var new_value = changed_attributes[changed_key][1];
      var new_key = changed_key_map[changed_key];
      if (new_key) {
        change[new_key] = new_value;
      } else {
        console.log('No handler for:', changed_key)
      }
    };
		// remove any attributes with null values, undefined values, or empty strings
		change = _.omit(change, function(value) {
			return value === null || value === '' || value === undefined;
		});
    return change;
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
