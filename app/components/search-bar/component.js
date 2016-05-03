import Ember from 'ember';



export default Ember.Component.extend({

  names: [ "María", "Søren Larsen", "João", "Saša Jurić", "Íñigo" ],
  // places: [],

  didRender: function(){
  //   console.log("didRender");
  //   // this.sendAction('didInsertElement');

    // var data = this.model.get('firstObject');
    // console.log(data);

  //   var places = []; 
  //   // places = places.concat(Object.keys(this.data.get('country')));
  //   console.log(places);
  //   // places = places.concat(Object.keys(data.get('state')));
  //   // places = places.concat(Object.keys(data.get('metro')));
  //   // this.set('places', places);
  }


  // actions: {
  //   test: function(){
  //     this.sendAction('test');
  //     var data = this.model.get('firstObject');
  //     this.set('data', data);

      // var places = []; 
      // places = places.concat(Object.keys(data.get('country')));
      // places = places.concat(Object.keys(data.get('state')));
      // places = places.concat(Object.keys(data.get('metro')));
      // this.set('places', places);
  //   }
  // }



});