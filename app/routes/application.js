import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('operator');
		// return Ember.RSVP.hash({
  //           operators: this.store.findAll('operator'),
  //           feeds: this.store.findAll('feed')
  //       });
	}
});
