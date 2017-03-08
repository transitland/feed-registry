import Ember from 'ember';
import DS from 'ember-data';
import _ from 'npm:lodash';
import centroid from 'npm:turf-centroid';
import iso31662 from 'npm:iso-3166-2';

var Operator = DS.Model.extend({
  feeds: DS.hasMany('feed', {
    async: true
  }),
  name: DS.attr('string'),
  short_name: DS.attr('string'),
  onestop_id: Ember.computed.alias('id'),
  country: DS.attr('string'),
  countryDisplayName: Ember.computed('country', function () {
    let countryCode = this.get('country');
    if (Ember.isPresent(countryCode)) {
      return iso31662.country(this.get('country')).name;
    }
  }),
  state: DS.attr('string'),
  stateDisplayName: Ember.computed('state', function () {
    let stateCode = this.get('state');
    if (Ember.isPresent(stateCode)) {
      return iso31662.subdivision(this.get('state')).name;
    }
  }),
  metro: DS.attr('string'),
  website: DS.attr('string'),
  timezone: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  include_in_changeset: DS.attr('boolean', {
    defaultValue: true
  }),
  geometry: DS.attr(),
  tags: DS.attr(),
  tagsAsArray: Ember.computed('tags', function () {
    // for use in templates
    // after upgrading to Ember 2.0, replace with {{#each-in}}
    let tags = this.get('tags');
    let propertyArray = [];
    for (var key in tags) {
      if (tags.hasOwnProperty(key) && key !== "toString") {
        propertyArray.push({
          key: key,
          value: tags[key]
        });
      }
    }
    return propertyArray;
  }),
  toChange: function () {
    // The change
    var change = {};
    change.onestopId = this.id;
    // Map Ember data attributes to Feed Schema
    var changed_key_map = [
      'name',
      'short_name',
      'country',
      'state',
      'metro',
      'website',
      'timezone',
      'geometry',
      'tags'
    ];
    var changed_keys = Object.keys(this.changedAttributes()).filter(key => changed_key_map.contains(key));
    for (let key of changed_keys) {
      change[key.camelize()] = this.get(key);
    }
    // remove any attributes with null values, undefined values, or empty strings
    change = _.omit(change, function (value) {
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
