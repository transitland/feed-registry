import Ember from 'ember';

export default Ember.Handlebars.registerBoundHelper('format-date',function(date) {
  console.log("date: ", date);
  if (moment(date).isValid()){
	return moment(date).format('MMMM D, YYYY') + " (" + moment(date).fromNow() + ")";
  } else {
	return '--';
  }
});
