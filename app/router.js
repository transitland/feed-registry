import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('operator', { path: "operator/:operator_id" });
  this.route('feeds', { path: "/" });
  this.route('error', { path: "*path" });
});

export default Router;
