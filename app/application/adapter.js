import DS from 'ember-data';
import Ember from 'ember';

import ENV from 'feed-registry/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.datastoreHost,
  namespace: 'api/v1',
  coalesceFindRequests: true,
  pathForType: function (type) {
    // model names should be underscored in URLs
    // For example: /api/v1/feed_version_imports
    let decamelized = Ember.String.decamelize(type);
    let underscored = Ember.String.underscore(decamelized);
    return Ember.String.pluralize(underscored);
  },
  ajaxOptions: function (url, type, options) {
    var hash = this._super(url, type, options);
    hash.beforeSend = function (xhr) {
      xhr.setRequestHeader('apikey', ENV.transitlandApiKey);
    }
    if (typeof (ENV.apiProxyKey) !== "undefined" && type === 'GET') {
      let data = {};
      if (typeof (hash.data) === 'string') {
        data = JSON.parse(hash.data);
      } else if (typeof (hash.data) !== "undefined") {
        data = hash.data;
      } else {
        data = {};
      }
      data["api_key"] = ENV.apiProxyKey;
      hash.data = data;
    }
    return hash;
  }
});
