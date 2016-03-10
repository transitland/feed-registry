import Ember from 'ember';
// import ENV from 'feed-registry/config/environment';


export default Ember.Handlebars.registerBoundHelper('geojson-io',function(param, text) {
  var entity = '';
  var baseURL = 'http://geojson.io/#data=data:text/x-url,http%3A%2F%2Ftransit.land%2Fapi%2Fv1%2F';

  if (param.charAt(0) === 'o'){
    entity = 'operators%2F';
  } else if (param.charAt(0) === 'f'){
    entity = 'feeds%2F';
  }

  if (param.charAt(1) === '-'){
    return new Ember.Handlebars.SafeString('<a href =' + baseURL + entity + param +'.geojson target = "_blank">' + 'geojson.io</a>');
  } else if (param.charAt(0) === '/') {
    return new Ember.Handlebars.SafeString('<a href =' + ENV.datastoreHost + param + '.geojson target = "_blank">' + 'geojson.io</a>');
  } else {
    return new Ember.Handlebars.SafeString('<a href =' + baseURL + param + '.geojson target = "_blank">' + 'geojson.io</a>');
  }
});


// http://geojson.io/#data=data:text/x-url,http%3A%2F%2Fapi.tiles.mapbox.com%2Fv3%2Ftmcw.map-gdv4cswo%2Fmarkers.geojson