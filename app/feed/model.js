import DS from 'ember-data';

var Feed = DS.Model.extend({
	operator: DS.belongsTo('operator', { async: true }),
	onestop_id: DS.attr('string'),
	url: DS.attr('string'),
	feed_format: DS.attr('string'),
	license_name: DS.attr('string'),
	license_url: DS.attr('string'),
	license_attribution: DS.attr('string'),
	license_derivation: DS.attr('string'),
	license_redistribution: DS.attr('string'),
	last_sha1: DS.attr('string'),
	last_fetched_at: DS.attr('string'),
	last_imported_at: DS.attr('string'),
	created_at: DS.attr('string'),
	updated_at: DS.attr('string'),
});

Feed.reopenClass({
	FIXTURES: [{
		id: 1,
		operator: 1,
		onestop_id: "f-9q9-caltrain",
		url: "http://www.caltrain.com/Assets/GTFS/caltrain/GTFS-Caltrain-Devs.zip",
		feed_format: "gtfs",
		// operator_onestop_ids_in_feed: ["o-9q9-caltrain"],
		license_name: "Some License",
		license_url: "http://www.caltrain.com/developer/Developer_License_Agreement_and_Privacy_Policy.html",
		license_attribution: "required",
		license_derivation: "allowed",
		license_redistribution: "allowed",
		last_sha1: "e4ec3bd51eb4efca8d6cee33fe332f9aaebde2da",
		last_fetched_at: "2015-07-16T22:15:31.032Z",
		last_imported_at: "2015-07-16T22:15:31.032Z",
		created_at: "2015-07-16T22:15:31.032Z",
		updated_at: "2015-07-16T22:15:31.032Z"
	}, {
		id: 2,
		operator: 2,
		onestop_id: "f-9q8y-sanfranciscomunicipaltransportationagency",
		url: "http://archives.sfmta.com/transitdata/google_transit.zip",
		feed_format: "gtfs",
		// operator_onestop_ids_in_feed: ["o-9q8y-sanfranciscomunicipaltransportationagency"],
		license_name: "Some Other License",
		license_url: "http://www.sfmta.com/about-sfmta/reports/gtfs-transit-data",
		license_attribution: "not_required",
		license_derivation: "prohibited",
		license_redistribution: "prohibited",
		last_sha1: "e4ec3bd51eb4efca8d6cee33fe332f9aaebde2da",
		last_fetched_at: "2015-07-13T22:15:31.032Z",
		last_imported_at: "2015-07-13T22:15:31.032Z",
		created_at: "2015-06-16T22:15:31.032Z",
		updated_at: "2015-06-16T22:15:31.032Z"
	}]
});

export default Feed;
