import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	// this.resource('application', { path: '/' }, function(){
	// 	this.route('table');
	// 	this.route('countries');
	// });
	// this.route('table');
	this.route('countries');
	this.route('table', { path: '/'});
	// this.route('countries', { path: '/'});
});

export default Router;
