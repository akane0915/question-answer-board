/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ask-it',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    firebase: {
      apiKey: "AIzaSyCbGJIac1SlBKs6fRbG_hkhKCgIASzEZaw",
      authDomain: "ask-it-48678.firebaseapp.com",
      databaseURL: "https://ask-it-48678.firebaseio.com",
      storageBucket: "ask-it-48678.appspot.com",
    },

    googleFonts: [
     'Open+Sans:300,400,700',
     'Roboto:300'
    ],

     contentSecurityPolicy: {
       'font-src': "'self' fonts.gstatic.com",
       'style-src': "'self' fonts.googleapis.com"
     },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
