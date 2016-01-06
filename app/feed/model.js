import Ember from 'ember';
import DS from 'ember-data';
import _ from 'npm:lodash';

var Feed = DS.Model.extend({
  onestop_id: Ember.computed.alias('id'),
  operators: DS.hasMany('operator', { async: true }),
  url: DS.attr('string'),
  feed_format: DS.attr('string'),
  license_name: DS.attr('string'),
  license_url: DS.attr('string'),
  license_use_without_attribution: DS.attr('string'),
  license_create_derived_product: DS.attr('string'),
  license_redistribute: DS.attr('string'),
  license_attribution_text: DS.attr('string'),
  last_sha1: DS.attr('string'),
  last_fetched_at: DS.attr('string'),
  last_imported_at: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  operators_in_feed: DS.attr(),
  geometry: DS.attr(),
  tags: DS.attr(),
  addOperator: function(operator) {
    this.get('operators').createRecord({
      id: operator.onestop_id,
      name: operator.name,
      website: operator.website,
      timezone: operator.timezone,
      geometry: operator.geometry,
      tags: operator.tags
    })
  },
  toChange: function() {
    var feedJson = this.toJSON();
    feedJson.onestopId = this.id;
    feedJson.includesOperators = (this.get('operators_in_feed') || []).map(function(oif) {
      return {
        gtfsAgencyId: oif.gtfs_agency_id,
        operatorOnestopId: oif.operator_onestop_id
      }
    });
    // remove attributes that don't need to be submitted to server
    feedJson = _.omit(feedJson, ['created_at', 'updated_at', 'operators', 'operators_in_feed']);
    // remove any attributes with null values, undefined values, or empty strings
    feedJson = _.omit(feedJson, function(value) {
      return value === null || value === '' || value === undefined;
    });
    return feedJson;
  }
});


export default Feed;
