import DS from 'ember-data';

import ENV from 'feed-registry/config/environment';

export default DS.RESTAdapter.extend({
	host: ENV.datastoreHost,
	namespace: 'api/v1',
	headers: {
		'Authorization': 'Token token=' + ENV.datastoreAuthToken
	},
	ajaxOptions: function(url, type, options) {
		var hash = this._super(url, type, options);
		if (type === 'GET') {
			let data = {};
			if (typeof(hash.data) === 'string') {
				data = JSON.parse(hash.data);
			}
			data["per_page"] = 5;
			hash.data = data;
		}
		return hash;
	}
});