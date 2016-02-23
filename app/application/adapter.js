import DS from 'ember-data';

import ENV from 'feed-registry/config/environment';

export default DS.RESTAdapter.extend({
	host: ENV.datastoreHost,
	namespace: 'api/v1',
	ajaxOptions: function(url, type, options) {
		var hash = this._super(url, type, options);
		// only need to include api_key when making GET requests
		// because those are the most frequent type of request.
		// if we include api_key in POSTs or PUTs, Datastore will barf
		if (typeof(ENV.apiProxyKey) !== "undefined" && type === 'GET') {
			let data = {};
			if (typeof(hash.data) === 'string') {
				data = JSON.parse(hash.data);
			} else if (typeof(hash.data) !== "undefined") {
				data = hash.data;
			} else {
				data = {};
			}
			data["api_key"] = ENV.apiProxyKey;
			hash.data = data;
		}
		return hash;
	}
});