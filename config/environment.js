'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'profile',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyCYg_8rYwDAwLNSTVb-WExLu8HkI4AhDOM",
      authDomain: "porfolio-8b4b4.firebaseapp.com",
      databaseURL: "https://porfolio-8b4b4.firebaseio.com",
      projectId: "porfolio-8b4b4",
      storageBucket: "porfolio-8b4b4.appspot.com",
      messagingSenderId: "174992337639",
      appId: "1:174992337639:web:c6dd72893cf4ad9f419042",
      measurementId: "G-QF0PDCF25B"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
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
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
