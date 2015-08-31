import Ember from 'ember';

export default Ember.Handlebars.registerBoundHelper('format-date',function(date) {
  return moment(date).format('MMMM D, YYYY');
});
