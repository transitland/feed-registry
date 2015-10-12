import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
	attrs: {
		feeds: {
			key: 'represented_in_feed_onestop_ids'
		}
	}
});
