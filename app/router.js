import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
  this.route('operators', function(){
    this.route('show', { path: "/:operator_id" });
  });
  this.route('error', { path: "*path" });

=======
    this.route('operators', function(){
      this.route('show', { path: "/:operator_id" });
      this.route('new');
    });
    this.route('error', { path: "*path" });
  
>>>>>>> master
});

export default Router;
