import Ember from 'ember';

export default Ember.Handlebars.registerBoundHelper('json-endpoint',function(url) {
  var entity = '';
  var baseURL = 'https://transit.land/api/v1/';
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

