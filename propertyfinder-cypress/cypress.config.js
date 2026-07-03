const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.propertyfinder.ae",

    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 12000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,

    video: true,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },

    // PropertyFinder is a real live production site.
    // Keep tests read-only: browse/search/filter only, never submit real
    // leads, mortgage requests, or contact forms with real data.
    chromeWebSecurity: false,

    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },

    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
  },

  env: {
    locale: "en",
  },
});
