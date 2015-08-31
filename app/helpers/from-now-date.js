import Ember from 'ember';

export default Ember.Handlebars.registerBoundHelper('from-now-date',function(date) {
  return moment(date).fromNow();
});