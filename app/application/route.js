import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
            operators: this.store.findAll('operator'),
            feeds: this.store.findAll('feed')
        });
	}
});

// moving this out of the application route breaks the app
// no feed or operator models are accessed