import Ember from 'ember';
import _ from 'npm:lodash';
import iso31662 from 'npm:iso-3166-2';

export default Ember.Component.extend({
  populateDictionaryAndSetExistingValues: function() {
    // populate country dictionary
    let dictionary = _.sortBy(_.values(_.mapValues(iso31662.data, (value, key) => {
      value['code'] = key;
      return value;
    })), 'name');
    this.set('countryDictionary', dictionary);

    // if operator has current values, select the appropriate country and state
    let currentCountryCode = this.get('operator.country');
    let currentStateCode = this.get('operator.state');
    if (Ember.isPresent(currentCountryCode)) {
      this.send('setCountry', _.find(this.countryDictionary, function(country) {
        return country.code === currentCountryCode;
      }));
    }
    if (Ember.isPresent(currentStateCode)) {
      this.send('setState', _.find(this.stateDictionary, function(state) {
        return state.code === currentStateCode;
      }));
    }
  }.on('init'),
  countryDictionary: [],
  stateDictionary: [],
  actions: {
    handleFocus(select) {
      select.actions.open();
    },
    setCountry(selectedCountry) {
      this.set('selectedCountry', selectedCountry);
      this.set('operator.country', selectedCountry.code);
      this.set('stateDictionary', _.sortBy(_.values(_.mapValues(selectedCountry.sub, (value, key) => {
        value['code'] = key;
        return value;
      })), 'name'));
    },
    setState(selectedState) {
      this.set('selectedState', selectedState);
      this.set('operator.state', selectedState.code);
    }
  }
});
