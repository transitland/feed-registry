import Ember from 'ember';



export default Ember.Component.extend({

  // store: Ember.inject.service(),

  // names: [ "María", "Søren Larsen", "João", "Saša Jurić", "Íñigo" ],
  places: [],

  // didRender: function(){
  //   console.log(this.model);
  //   console.log(this.model.country);

  
  // }


  actions: {

    test: function(){
      this.sendAction('test');
      var data = this.model.get('firstObject');
      // this.set('data', data);

      var places = []; 
      places = places.concat(Object.keys(data.get('country')));
      places = places.concat(Object.keys(data.get('state')));
      places = places.concat(Object.keys(data.get('metro')));
      console.log(places);
      this.set('places', places);
    }
  }



});