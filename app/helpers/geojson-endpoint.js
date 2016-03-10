import Ember from 'ember';
import ENV from 'feed-registry/config/environment';


export default Ember.Handlebars.registerBoundHelper('geojson-endpoint',function(param, text) {
  var entity = '';
  var baseURL = ENV.datastoreHost+'/api/v1/';

  if (param.charAt(0) === 'o'){
    entity = 'operators/';
  } else if (param.charAt(0) === 'f'){
    entity = 'feeds/';
  }

  if (param.charAt(1) === '-'){
    return new Ember.Handlebars.SafeString('<a href =' + baseURL + entity + param +'.geojson target = "_blank">GeoJSON</a>');
  } else if (param.charAt(0) === '/') {
    return new Ember.Handlebars.SafeString('<a href =' + ENV.datastoreHost + param + '.geojson target = "_blank">GeoJSON</a>');
  } else {
    return new Ember.Handlebars.SafeString('<a href =' + baseURL + param + '.geojson target = "_blank">GeoJSON</a>');
  }
});

