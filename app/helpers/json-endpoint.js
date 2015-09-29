import Ember from 'ember';

export default Ember.Handlebars.registerBoundHelper('json-endpoint',function(url) {
  var entity = '';
  var baseURL = 'https://transit.land/api/v1/';
  var endpoint = '';

  if (url.charAt(0) === 'o'){
	entity = 'operators/';
	endpoint = baseURL + entity;
  } else if (url.charAt(0) === 'f'){
	entity = 'feeds/';
	endpoint = baseURL + entity;
  };
  
  console.log("entity: ", entity);
  console.log("baseURL: ", baseURL);
  console.log("endpoint: ", endpoint);

  return endpoint+url;
});
