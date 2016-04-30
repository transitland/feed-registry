import ApplicationAdapter from '../application/adapter';
import ENV from 'feed-registry/config/environment';


export default ApplicationAdapter.extend({
	pathForType: function(){
		return "operators/aggregate";
	}
});


