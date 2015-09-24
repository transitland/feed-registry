import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	primaryKey: 'onestop_id',
	attrs: {
		feeds: {
			key: 'represented_in_feed_onestop_ids'
		}
	}
});
