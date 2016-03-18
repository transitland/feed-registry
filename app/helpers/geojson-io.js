import Ember from 'ember';
// import ENV from 'feed-registry/config/environment';


export default Ember.Handlebars.registerBoundHelper('geojson-io',function(param, attr) {
  var entity = '';
  var baseURL = 'http://geojson.io/#data=data:text/x-url,'+ encodeURIComponent('http://transit.land/api/v1/');

  if (param.charAt(0) === 'o'){
    entity = encodeURIComponent('operators/');
  } else if (param.charAt(0) === 'f'){
    entity = encodeURIComponent('feeds/');
  }


	if (attr === "routes") {
		var routes = encodeURIComponent('routes.geojson?operated_by=');
		return new Ember.Handlebars.SafeString('<a href =' + baseURL + routes + param +' target = "_blank">view</a>');
	} else if (attr === "stops") {
		var stops = encodeURIComponent('stops.geojson?served_by=');
		return new Ember.Handlebars.SafeString('<a href =' + baseURL + stops + param +' target = "_blank">view</a>');
	} else {
		if (param.charAt(1) === '-'){
			return new Ember.Handlebars.SafeString('<a href =' + baseURL + entity + param +'.geojson target = "_blank">view</a>');
		} else if (param.charAt(0) === '/') {
			return new Ember.Handlebars.SafeString('<a href =' + ENV.datastoreHost + param + '.geojson target = "_blank">view</a>');
		} else {
			return new Ember.Handlebars.SafeString('<a href =' + baseURL + param + '.geojson target = "_blank">view</a>');
		}
	}
});