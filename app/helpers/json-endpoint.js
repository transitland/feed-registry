import Ember from 'ember';
import ENV from 'feed-registry/config/environment';


export default Ember.Handlebars.registerBoundHelper('json-endpoint',function(param) {
  var entity = '';
  var baseURL = ENV.datastoreHost+'/api/v1/';
  var endpoint = baseURL + entity + param;

  if (param.charAt(0) === 'o'){
    entity = 'operators/';
  } else if (param.charAt(0) === 'f'){
    entity = 'feeds/';
  }
  
  if (param.charAt(1) === '-'){
    return new Ember.Handlebars.SafeString('<a href =' + endpoint +' target = "_blank">' + endpoint + '</a>');
  } else {
    return new Ember.Handlebars.SafeString('<a href =' + baseURL + param + ' target = "_blank">' + param + '</a>');
  }
});

