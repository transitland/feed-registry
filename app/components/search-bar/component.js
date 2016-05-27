import Ember from 'ember';

export default Ember.Component.extend({
  placeOrName: null,
  countries: null,
  country: null,
  name: null,
  metro: null,
  short_name: null,
  typeOfPlaceOrName: null,
  selected: null,

  multipleOperators: Ember.computed.gte('totalOperators', 2),

  actions: {
    findPlacesAndNames: function(){
      this.sendAction('findPlacesAndNames');
      var data = this.model.get('firstObject');

      var countries = [];
      var statesOrProvinces = [];
      var metros = [];
      var names = [];
      var short_names = [];

      countries = countries.concat(Object.keys(data.get('country')));
      statesOrProvinces = statesOrProvinces.concat(Object.keys(data.get('state')));
      metros = metros.concat(Object.keys(data.get('metro')));
      names = names.concat(Object.keys(data.get('name')));
      short_names = short_names.concat(Object.keys(data.get('short_name')));

      this.set('countries', countries);
      this.set('statesOrProvinces', statesOrProvinces);
      this.set('metros', metros);
      this.set('names', names);
      this.set('short_names', short_names);

      var placesAndNames = [];
      placesAndNames = placesAndNames.concat(Object.keys(data.get('country')));
      placesAndNames = placesAndNames.concat(Object.keys(data.get('state')));
      placesAndNames = placesAndNames.concat(Object.keys(data.get('metro')));
      placesAndNames = placesAndNames.concat(Object.keys(data.get('name')));
      placesAndNames = placesAndNames.concat(Object.keys(data.get('short_name')));
      placesAndNames.sort();
      this.set('placesAndNames', placesAndNames);

    },

    setPlaceOrName: function(placeOrName){
      var typeOfPlaceOrName = null;
      if (this.countries.indexOf(placeOrName) >= 0){
        typeOfPlaceOrName = 'country';
      } else if (this.statesOrProvinces.indexOf(placeOrName) >= 0){
        typeOfPlaceOrName = 'state';
      } else if (this.metros.indexOf(placeOrName) >= 0){
        typeOfPlaceOrName = 'metro';
      } else if (this.names.indexOf(placeOrName) >= 0){
        typeOfPlaceOrName = 'name';
      } else if (this.short_names.indexOf(placeOrName) >= 0){
        typeOfPlaceOrName = 'short_name';
      }
      this.set(placeOrName, placeOrName);
      this.set(typeOfPlaceOrName, typeOfPlaceOrName);
      this.sendAction('filterByPlaceOrName', placeOrName, typeOfPlaceOrName);
    }
  }
});
