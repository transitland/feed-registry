import Ember from 'ember';

export default Ember.Component.extend({
  place: null,
  countries: null,
  country: null,
  typeOfPlace: null,
  selected: null,
  
  actions: { 
    findPlaces: function(){
      this.sendAction('findPlaces');
      var data = this.model.get('firstObject');

      var countries = [];
      var states = [];
      var metros = [];

      countries = countries.concat(Object.keys(data.get('country')));
      states = states.concat(Object.keys(data.get('state')));
      metros = metros.concat(Object.keys(data.get('metro')));
    
      this.set('countries', countries);
      this.set('states', states);
      this.set('metros', metros);

      var places = []; 
      places = places.concat(Object.keys(data.get('country')));
      places = places.concat(Object.keys(data.get('state')));
      places = places.concat(Object.keys(data.get('metro')));
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
      }
    },

    filterByPlace: function(){
      this.sendAction('filterByPlace', this.place, this.typeOfPlace);
    }
  }
});