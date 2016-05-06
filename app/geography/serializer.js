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
				}
			]
		};
	
		return this._super(store, primaryModelClass, geographies, id, requestType);
	}
});
