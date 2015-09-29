import Ember from 'ember';
import ENV from 'feed-registry/config/environment';


export default Ember.Handlebars.registerBoundHelper('json-endpoint',function(url) {
  var entity = '';
  var baseURL = ENV.datastoreHost+'/api/v1/';
  var endpoint = '';

  if (url.charAt(0) === 'o'){
    entity = 'operators/';
    endpoint = baseURL + entity + url;
  } else if (url.charAt(0) === 'f'){
    entity = 'feeds/';
    endpoint = baseURL + entity + url;
  }
  
  return new Ember.Handlebars.SafeString('<a href =' + endpoint +' target = "_blank">' + endpoint + '</a>');
});

