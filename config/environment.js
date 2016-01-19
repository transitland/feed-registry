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
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'connect-src': "'self' http://dev.transit.land https://transit.land",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com https://maxcdn.bootstrapcdn.com",
      'media-src': "'self'",
      'script-src': "'self' https://maxcdn.bootstrapcdn.com",
      'font-src': "'self' https://fonts.gstatic.com https://maxcdn.bootstrapcdn.com",

    },

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
    ENV.contentSecurityPolicy['connect-src'] = "'self' http://localhost:3000"
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
    ENV.allowEditingMode = true;
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
