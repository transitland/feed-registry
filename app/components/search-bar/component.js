import Ember from 'ember';



export default Ember.Component.extend({
  places: [],
  place: null,

  actions: {

    findPlaces: function(){
      this.sendAction('findPlaces');
      var data = this.model.get('firstObject');

      var places = []; 
      places = places.concat(Object.keys(data.get('country')));
      places = places.concat(Object.keys(data.get('state')));
      places = places.concat(Object.keys(data.get('metro')));
      this.set('places', places);
    },

    setPlace: function(place){
      this.set('place', place);
    },

    filterByPlace: function(){
      this.sendAction('filterByPlace', this.place);
    }
  }
});