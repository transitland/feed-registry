import Ember from 'ember';

export default Ember.Component.extend({
  place: null,
  countries: null,
  country: null,
  name: null,
  short_name: null,
  typeOfPlace: null,
  selected: null,
  
  actions: { 
    findPlaces: function(){
      this.sendAction('findPlaces');
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

      var places = []; 
      places = places.concat(Object.keys(data.get('country')));
      places = places.concat(Object.keys(data.get('state')));
      places = places.concat(Object.keys(data.get('metro')));
      places = places.concat(Object.keys(data.get('name')));
      places = places.concat(Object.keys(data.get('short_name')));
      this.set('places', places);

    },

    setPlace: function(place){
      this.set('place', place);
      this.set('selected', null);
      if (this.countries.indexOf(place) >= 0){
        this.set('typeOfPlace', 'country');
      } else if (this.states.indexOf(place) >= 0){
        this.set('typeOfPlace', 'state');
      } else if (this.metros.indexOf(place) >= 0){
        this.set('typeOfPlace', 'metro');
      } else if (this.names.indexOf(place) >= 0){
        this.set('typeOfPlace', 'name');
      } else if (this.short_names.indexOf(place) >= 0){
        this.set('typeOfPlace', 'short_name');
      }
    },

    filterByPlace: function(){
      this.sendAction('filterByPlace', this.place, this.typeOfPlace);
    }
  }
});