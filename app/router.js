import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('operators', function(){
    this.route('show', { path: "/:operator_id" });
    this.route('new');
  });
  this.route('error', { path: "*path" });


  this.route('feeds', function() {
    this.route('new', function() {
      this.route('add-operator');
      this.route('submit');
    });
  });
});

export default Router;
