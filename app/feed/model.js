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
  import_level_of_active_feed_version: DS.attr(),
	isAtLeastImportLevelZero: Ember.computed.gte('import_level_of_active_feed_version', 0),
	isAtLeastImportLevelOne: Ember.computed.gte('import_level_of_active_feed_version', 1),
	isAtLeastImportLevelTwo: Ember.computed.gte('import_level_of_active_feed_version', 2),
	isAtLeastImportLevelFour: Ember.computed.gte('import_level_of_active_feed_version', 4),
  addOperator: function(operator) {
    this.get('operators').createRecord({
      id: operator.onestop_id,
      name: operator.name,
      short_name: operator.short_name,
      country: operator.country,
      state: operator.state,
      metro: operator.metro,
      website: operator.website,
      timezone: operator.timezone,
      geometry: operator.geometry,
      tags: operator.tags
    });
  },
  toChange: function() {
    // Map Ember data attributes to Feed Schema
    var changed_key_map = {
      geometry: 'geometry',
      name: 'name',
      tags: 'tags',
      url: 'url',
      feed_format: 'feedFormat',
      license_name: 'licenseName',
      license_url: 'licenseUrl',
      license_use_without_attribution: 'licenseUseWithoutAttribution',
      license_attribution_text: 'licenseAttributionText',
      license_create_derived_product: 'licenseCreateDerivedProduct',
      license_redistribute: 'licenseRedistribute'
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
    // Lookup table of operator onestop_id to gtfs agency_id
    // ex. gtfs_agency_id['o-9q9-caltrain'] = 'ca-us-caltrain';
    var gtfs_agency_ids = {};
    (this.get('operators_in_feed') || []).forEach(function(oif) {
      gtfs_agency_ids[oif.operator_onestop_id] = oif.gtfs_agency_id
    });
    // Filter operators by include_in_changeset
    change.includesOperators = this
      .get('operators')
      .filterBy('include_in_changeset', true)
      .map(function(operator) {
        return {
          gtfsAgencyId: gtfs_agency_ids[operator.get('onestop_id')],
          operatorOnestopId: operator.get('onestop_id')
        }
      });
    // Remove any attributes with null values, undefined values, or empty strings
    change = _.omit(change, function(value) {
      return value === null || value === '' || value === undefined;
    });
    return change;
  }
});


export default Feed;
