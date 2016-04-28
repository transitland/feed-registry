import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	isNewSerializerAPI: true,
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType){
		var geographies = {
			geographies: [
				{id: 1, placeName: "Mexico", type: "country", count: "7" }
			]
		}
		return this._super(store, primaryModelClass, geographies, id, requestType);
	}
});
