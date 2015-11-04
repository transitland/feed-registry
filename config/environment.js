/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'feed-registry',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    datastoreHost: 'https://transit.land',
    allowEditingMode: false,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.datastoreHost = 'http://dev.transit.land';
    ENV.allowEditingMode = true;
    ENV.datastoreAuthToken = 'CHANGETHISLOCALLY';
  }

  if (environment === 'local') {
    ENV.datastoreHost = 'http://localhost:3000';
    ENV.allowEditingMode = true;
    ENV.datastoreAuthToken = 'CHANGETHISLOCALLY';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.datastoreHost = 'http://dev.transit.land';
    ENV.baseURL = '/feed-registry';
    ENV.googleAnalytics = {
      webPropertyId: 'UA-47035811-4'
    };
  }

  if (environment === 'production') {
    ENV.datastoreHost = 'https://transit.land';
    ENV.baseURL = '/feed-registry';
    ENV.googleAnalytics = {
      webPropertyId: 'UA-47035811-2'
    };
  }

  return ENV;
};
