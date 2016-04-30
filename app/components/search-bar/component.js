import Ember from 'ember';



export default Ember.Component.extend({

  // model: function() {
  //   debugger;
  //   console.log("store query: " + this.store.query('operator', 'aggregate'))
  //   return this.store.query('operator', 'aggregate');
  // },

  // model: function(params) {
  //   return this.store.find('operator', params['aggregate']);
  // },
  // places: [],
  // baseURL: ENV.datastoreHost+'/api/v1/operators/aggregate',

  names: [ "María", "Søren Larsen", "João", "Saša Jurić", "Íñigo" ],
  places: [],

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
      this.sendAction('test');
      var countries = this.geographies.country;
      console.log("geographies: " + this.geographies.get("firstObject.country"));
      for (var key in countries){
         console.log(key);
       }
      // console.log("places: " + this.store.findAll("geography"));
      // console.log("places: " + this.store.findAll('geography'));
    }
  }



});