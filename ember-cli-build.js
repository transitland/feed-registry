/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var fingerprint = false;
  var prepend = '';
  if (process.env.EMBER_ENV === 'staging') {
    fingerprint = true;
    prepend = 'http://d2tkmr00hnrtoq.cloudfront.net/';
  } else if (process.env.EMBER_ENV === 'production') {
    fingerprint = true;
    prepend = 'https://d11xhlzkgsq6oc.cloudfront.net';
  }

  var app = new EmberApp(defaults, {
    fingerprint: {
      enabled: fingerprint,
      prepend: prepend
    },
    // https://www.npmjs.com/package/ember-cli-bootstrap-sassy#bootstrap-javascript
    'ember-cli-bootstrap-sassy': {
      'js': false,
      'glyphicons': false
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
