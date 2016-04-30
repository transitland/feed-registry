import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	isNewSerializerAPI: true,
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType){
		var geographies = {
			geographies: [
				{
					id: 1,
					// placeName: payload.country, 
					country: payload.country,
					state: payload.state,
					metro: payload.metro, 
					// type: "country", 
					// count: payload.country.count, 
				}
			]
		};
		console.log(payload);
		console.log(geographies);
		return this._super(store, primaryModelClass, geographies, id, requestType);
	}
});
