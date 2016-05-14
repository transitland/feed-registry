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

  queryParamExists: Ember.computed('import_level', 'country', 'state', 'metro', 'name', 'short_name', function(){
        var import_level = this.get('import_level');
        var country = this.get('country');
        var state = this.get('state');
        var metro = this.get('metro');
        var name = this.get('name');
        var short_name = this.get('short_name');

        if (import_level || country || state || metro || name || short_name){
            return true;
        }
    }),
  
  actions: { 
    findPlacesAndNames: function(){
      this.sendAction('findPlacesAndNames');
      var data = this.model.get('firstObject');

      var countries = [];
      var states = [];
      var metros = [];
      var names = [];
      var short_names = [];

      countries = countries.concat(Object.keys(data.get('country')));
      states = states.concat(Object.keys(data.get('state')));
      metros = metros.concat(Object.keys(data.get('metro')));
      names = names.concat(Object.keys(data.get('name')));
      short_names = short_names.concat(Object.keys(data.get('short_name')));
    
      this.set('countries', countries);
      this.set('states', states);
      this.set('metros', metros);
      this.set('names', names);
      this.set('short_names', short_names);

      var placesAndNames = []; 
      placesAndNames = placesAndNames.concat(Object.keys(data.get('country')));
      placesAndNames = placesAndNames.concat(Object.keys(data.get('state')));
      placesAndNames = placesAndNames.concat(Object.keys(data.get('metro')));
      placesAndNames = placesAndNames.concat(Object.keys(data.get('name')));
      placesAndNames = placesAndNames.concat(Object.keys(data.get('short_name')));
      this.set('placesAndNames', placesAndNames);

    },

    setPlaceOrName: function(placeOrName){
      this.set('placeOrName', placeOrName);
      this.set('selected', null);
      if (this.countries.indexOf(placeOrName) >= 0){
        this.set('typeOfPlaceOrName', 'country');
      } else if (this.states.indexOf(placeOrName) >= 0){
        this.set('typeOfPlaceOrName', 'state');
      } else if (this.metros.indexOf(placeOrName) >= 0){
        this.set('typeOfPlaceOrName', 'metro');
      } else if (this.names.indexOf(placeOrName) >= 0){
        this.set('typeOfPlaceOrName', 'name');
      } else if (this.short_names.indexOf(placeOrName) >= 0){
        this.set('typeOfPlaceOrName', 'short_name');
      }
    },

    filterByPlaceOrName: function(){
      this.sendAction('filterByPlaceOrName', this.placeOrName, this.typeOfPlaceOrName);
    }
  }
});