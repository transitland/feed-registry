import Ember from 'ember';
import PaginatedOrderedController from 'feed-registry/mixins/paginated-ordered-controller';
import iso31662 from 'npm:iso-3166-2';

export default Ember.Controller.extend(PaginatedOrderedController, {
  queryParams: ['import_level', 'country', 'state', 'metro', 'name', 'short_name'],
  import_level: null,
  country: null,
  state: null,
  metro: null,
  name: null,
  short_name: null,

  placesAndNamesModel: Ember.computed(function () {
    return this.store.findAll('geography');
  }),

  placeOrName: Ember.computed('country', 'state', 'metro', 'name', 'short_name', function () {
    if (this.get('country')) {
      return {
        value: this.get('country'),
        display: iso31662.country(this.get('country')).name,
        type: 'country'
      };
    } else if (this.get('state')) {
      return {
        value: this.get('state'),
        display: iso31662.subdivision(this.get('state')).name,
        type: 'state'
      };
    } else if (this.get('metro')) {
      return {
        value: this.get('metro'),
        display: this.get('metro'),
        type: 'metro'
      };
    } else if (this.get('name')) {
      return {
        value: this.get('name'),
        display: this.get('name'),
        type: 'name'
      };
    } else if (this.get('short_name')) {
      return {
        value: this.get('short_name'),
        display: this.get('short_name'),
        type: 'short_name'
      };
    } else {
      return null;
    }
  }),
  pageTitle: Ember.computed('placeOrName', function() {
    const placeOrName = this.get('placeOrName')
    if (placeOrName) {
      const type = placeOrName.type.replace('_', '');
      return `filtering for ${type}: ${placeOrName.display}`;
    }
  }),
  actions: {
    transitionToNewSort: function (sortOrder, sortKey) {
      this.transitionTo({
        queryParams: {
          "sort_order": sortOrder,
          "sort_key": sortKey,
          "offset": 0,
        }
      });
    },
    findPlacesAndNames: function () {
      var placesAndNames = this.store.findAll('geography');
    },
    filterByPlaceOrName: function (placeOrNameCode, placeOrNameType) {
      this.set('country', null);
      this.set('state', null);
      this.set('metro', null);
      this.set('name', null);
      this.set('short_name', null);
      this.set(placeOrNameType, placeOrNameCode);
      this.set('offset', 0); // so we don't leave user stranded on an empty page
    }
  }
});
