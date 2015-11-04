import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {

    this.route('operators', function(){
      this.route('show', { path: "/:operator_id" });
      this.route('new');
    });
    this.route('error', { path: "*path" });
  

});

export default Router;
