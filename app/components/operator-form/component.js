import Ember from 'ember';

export default Ember.Component.extend({
	// isIncluded: Ember.computed('model.include_in_changeset', function() {
	// 	if (this.get('operator.include_in_changeset') === true) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }),
	isIncluded: true,
	actions: {
		clickYes() {
			this.set('operator.include_in_changeset', true);
			this.set('isIncluded', true);
		},
		clickNo() {
			this.set('operator.include_in_changeset', false);
			this.set('isIncluded', false);
		}
	},
	timezones: [
		"America/New_York",
		 "America/Detroit",
		 "America/Kentucky/Louisville",
		 "America/Kentucky/Monticello",
		 "America/Indiana/Indianapolis",
		 "America/Indiana/Vincennes",
		 "America/Indiana/Winamac",
		 "America/Indiana/Marengo",
		 "America/Indiana/Petersburg",
		 "America/Indiana/Vevay",
		 "America/Chicago",
		 "America/Indiana/Tell_City",
		 "America/Indiana/Knox",
		 "America/Menominee",
		 "America/North_Dakota/Center",
		 "America/North_Dakota/New_Salem",
		 "America/North_Dakota/Beulah",
		 "America/Denver",
		 "America/Boise",
		 "America/Phoenix",
		 "America/Los_Angeles",
		 "America/Metlakatla",
		 "America/Anchorage",
		 "America/Juneau",
		 "America/Sitka",
		 "America/Yakutat",
		 "America/Nome",
		 "America/Adak",
		 "Pacific/Honolulu"
	]

});
