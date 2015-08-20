// import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
// });

import DS from 'ember-data';

// http://stackoverflow.com/a/19763083/40956
export default DS.FixtureAdapter.extend({
	queryFixtures: function(records, query, type) {
	    return records.filter(function(record) {
	        for(var key in query) {
	            if (!query.hasOwnProperty(key)) { continue; }
	            var value = query[key];
	            if (record[key] !== value) { return false; }
	        }
        return true;
    });
  }
});

