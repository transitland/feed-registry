import DS from 'ember-data';

import ENV from 'feed-registry/config/environment';

export default DS.RESTAdapter.extend({
	host: ENV.datastoreHost,
	namespace: 'api/v1',
	headers: {
		'Authorization': 'Token token=' + ENV.datastoreAuthToken
	}
});