import DS from 'ember-data';

var Operator = DS.Model.extend({
	feed: DS.belongsTo('feed'),
	identifiers: DS.attr(),
	name: DS.attr('string'),
	short_name: DS.attr('string'),
	onestop_id: DS.attr('string'),
	country: DS.attr('string'),
	state: DS.attr('string'),
	municipality: DS.attr('string'),
	type: DS.attr('string'),
	website: DS.attr('string'),
	timezone: DS.attr('string'),
	created_at: DS.attr('date'),
	updated_at: DS.attr('date')
});

Operator.reopenClass({
	FIXTURES: [{
		id: 1,
		feed: 1,
		identifiers: ["gtfs://f-9q9-caltrain/o/caltrain-ca-us", "usntd://9134"],
		name: "Caltrain",
		short_name: null,
		onestop_id: "o-9q9-caltrain",
		country: "USA",
		state: "CA",
		municipality: "San Francisco Bay Area",
		geometry: {
			type: "Polygon",
			coordinates: [
				[
					[-122.412076, 37.631108],
					[-122.386832, 37.599797],
					[-122.232, 37.486101],
					[-121.566225, 37.003485],
					[-121.566088, 37.003538],
					[-121.610049, 37.085225],
					[-121.610936, 37.086653],
					[-121.650244, 37.129363],
					[-122.394935, 37.776348],
					[-122.394992, 37.77639],
					[-122.412076, 37.631108]
				]
		]},
		website: "http://www.caltrain.com",
		timezone: "America/Los_Angeles",
		created_at: "2015-07-16T22:43:15.724Z",
		updated_at: "2015-07-16T22:43:15.724Z"
	},{
		id: 2,
		feed: 2,
		identifiers: ["gtfs://f-9q8y-sanfranciscomunicipaltransportationagency/o/SFMTA", "usntd://9015"],
		name: "San Francisco Municipal Transportation Agency",
		short_name: "SFMTA",
		onestop_id: "o-9q8y-sanfranciscomunicipaltransportationagency",
		country: "USA",
		state: "CA",
		municipality: "San Francisco Bay Area",
		geometry: {
			type: "Polygon",
			coordinates: [
				[
					[-122.53867, 37.83238],
					[-122.506821, 37.735482],
					[-122.500028, 37.718996],
					[-122.499913, 37.718738],
					[-122.49766, 37.71677],
					[-122.485294, 37.709312],
					[-122.48498, 37.70913],
					[-122.469273, 37.705764],
					[-122.413084, 37.706296],
					[-122.39422, 37.70898],
					[-122.392836, 37.709804],
					[-122.365447, 37.72792],
					[-122.36633, 37.820001],
					[-122.371964, 37.828311],
					[-122.373477, 37.82982],
					[-122.48383, 37.83592],
					[-122.50214, 37.836443],
					[-122.53867, 37.83238]
				]
		]},
		website: "http://www.sfmta.com",
		timezone: "America/Los_Angeles",
		created_at: "2015-07-20T23:56:44.730Z",
		updated_at: "2015-07-20T23:56:44.730Z"
	}, {
		id: 3,
		feed: null,
		identifiers: ["usntd://0008"],
		name: "Tri-County Metropolitan Transportation District of Oregon",
		short_name: "TriMet",
		onestop_id: "o-c20-trimet",
		country: "USA",
		state: "OR",
		municipality: "Portland",
		website: "http://www.trimet.org",
		timezone: "America/Los_Angeles",
		created_at: "2015-05-20T23:56:44.730Z",
		updated_at: "2015-05-20T23:56:44.730Z"
	}]
  
});

export default Operator;