const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // ⚠️ PLACEHOLDER — replace with your real school software URL
    baseUrl: "https://your-school-software-domain.com",

    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,

    video: true,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },

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
    // ⚠️ PLACEHOLDERS — override via cypress.env.json or --env flags, never commit real creds
    adminUsername: "admin@example.com",
    adminPassword: "ChangeMe123!",
    apiUrl: "https://your-school-software-domain.com/api",
  },
});
