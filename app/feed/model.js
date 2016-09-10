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
  toChange: function() {
    // The change
    var change = {};
    change.onestopId = this.id;
    // Map Ember data attributes to Feed Schema
    var changed_key_map = [
      'geometry',
      'name',
      'tags',
      'url',
      'feed_format',
      'license_name',
      'license_url',
      'license_use_without_attribution',
      'license_attribution_text',
      'license_create_derived_product',
      'license_redistribute'
    ];
    var changed_keys = Object.keys(this.changedAttributes()).filter(key => changed_key_map.contains(key));
    for (let key of changed_keys) {
      change[key.camelize()] = this.get(key);
    }
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
