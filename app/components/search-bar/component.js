import Ember from 'ember';
// import DS from 'ember-data';

// import ENV from 'feed-registry/config/environment';


export default Ember.Component.extend({

  // model: function(params) {
  //   return this.store.find('operator', params['aggregate']);
  // },
  // places: [],
  // baseURL: ENV.datastoreHost+'/api/v1/operators/aggregate',

  names: [ "María", "Søren Larsen", "João", "Saša Jurić", "Íñigo" ],

  // for (var key in json){
  //   if (json.hasOwnProperty(key)){
  //     if (key === "country" || key === "state" || key === "metro"){
  //       for (var place in json[key]){
  //         if (json[key].hasOwnProperty(place)){
  //           places.push(place);
  //         }
  //       }
  //     }
      
  //   }
  // }
  actions: {
    test: function(){
      this.sendAction('test', "aggregate");
    }
  }



});

// https://transit.land/api/v1/operators/aggregate