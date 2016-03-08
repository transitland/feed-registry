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
      'default-src': "'none' https://*.cloudfront.net",
      'connect-src': "'self' https://*.transit.land",
      'img-src': "'self' data:",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'media-src': "'self'",
      'script-src': "'self'",
      'font-src': "'self' https://fonts.gstatic.com https://*.cloudfront.net"
    },

  };

  if (environment === 'development') {
    ENV.datastoreHost = 'https://dev.transit.land';
    ENV.allowEditingMode = true;
    ENV.apiProxyKey= 'transitland-YFO6jk8';
  }

  if (environment === 'local') {
    ENV.datastoreHost = 'http://localhost:3000';
    ENV.allowEditingMode = true;
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
    ENV.datastoreHost = 'https://dev.transit.land';
    ENV.allowEditingMode = true;
    ENV.baseURL = '/feed-registry';
    ENV.googleAnalytics = {
      webPropertyId: 'UA-47035811-4'
    };
    ENV.apiProxyKey= 'transitland-YFO6jk8';
  }

  if (environment === 'production') {
    ENV.datastoreHost = 'https://transit.land';
    ENV.allowEditingMode = true;
    ENV.baseURL = '/feed-registry';
    ENV.googleAnalytics = {
      webPropertyId: 'UA-47035811-2'
    };
    ENV.apiProxyKey= 'transitland-_ngAKUs';
  }

  return ENV;
};
