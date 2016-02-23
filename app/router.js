import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';


const Router = Ember.Router.extend(googlePageview, {
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
      this.route('license');
      this.route('success');
    });
  });
});

Ember.Router.reopen({
  scrollToTop: function() {
    window.scrollTo(0, 0);
  }.on('didTransition')
});

export default Router;
