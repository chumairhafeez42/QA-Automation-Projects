const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Allows `--env grep=@tag` style filtering if you add cypress-grep later
  on("task", {
    log(message) {
      console.log(message);
      return null;
    },
  });

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.carrefouruae.com",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    viewportWidth: 1440,
    viewportHeight: 900,
    video: false,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    env: {
      startPath: "/mafuae/en",
    },
  },
});
