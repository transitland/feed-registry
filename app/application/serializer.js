import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	// Custom json root. The API returns objects in the "data" key.
	// We need to re-assign it to the singular version of the model name.
	// So {data: {name: foo}} becomes {post: {name: foo}}
	
	normalizeSingleResponse: function(store, primaryModelClass, rawPayload, id, requestType) {
		var payload = {};
		payload[primaryModelClass.modelName] = rawPayload;
		return this._super(store, primaryModelClass, payload, id, requestType);
	},

	primaryKey: 'onestop_id',

});
