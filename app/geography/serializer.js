import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	isNewSerializerAPI: true,
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType){
		var geographies = {
			geographies: [
				{
					id: 1,
					country: payload.country,
					state: payload.state,
					metro: payload.metro,
					name: payload.name,
					short_name: payload.short_name
				}
			]
		};
	
		return this._super(store, primaryModelClass, geographies, id, requestType);
	}
});
