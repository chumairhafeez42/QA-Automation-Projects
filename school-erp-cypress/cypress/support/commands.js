// ***********************************************
// Custom reusable Cypress commands for the School ERP suite
// ***********************************************

/**
 * Login command — reusable across every spec.
 * Uses cy.session() so login only happens once per test run per user,
 * dramatically speeding up the whole suite.
 */
Cypress.Commands.add("loginAsAdmin", (username, password) => {
  const user = username || Cypress.env("adminUsername");
  const pass = password || Cypress.env("adminPassword");

  cy.session(
    [user, pass],
    () => {
      cy.visit("/login"); // ⚠️ PLACEHOLDER route
      cy.get('[data-cy="username-input"]').type(user); // ⚠️ PLACEHOLDER selector
      cy.get('[data-cy="password-input"]').type(pass, { log: false }); // ⚠️ PLACEHOLDER selector
      cy.get('[data-cy="login-button"]').click(); // ⚠️ PLACEHOLDER selector
      cy.url().should("include", "/dashboard"); // ⚠️ PLACEHOLDER route
      cy.get('[data-cy="dashboard-welcome"]').should("be.visible"); // ⚠️ PLACEHOLDER selector
    },
    {
      validate: () => {
        cy.getCookie("session_token").should("exist"); // ⚠️ PLACEHOLDER cookie name
      },
      cacheAcrossSpecs: true,
    }
  );
  cy.visit("/dashboard");
});

/**
 * Navigate via the left sidebar menu — generic helper for module navigation.
 * @param {string} moduleName - visible text of the sidebar menu item
 */
Cypress.Commands.add("navigateToModule", (moduleName) => {
  cy.get('[data-cy="sidebar-menu"]').contains(moduleName).click(); // ⚠️ PLACEHOLDER selector
});

/**
 * Generic "wait for table to load" helper — used after search/filter actions.
 */
Cypress.Commands.add("waitForTableLoad", () => {
  cy.get('[data-cy="loading-spinner"]', { timeout: 15000 }).should("not.exist");
  cy.get('[data-cy="data-table"]').should("be.visible"); // ⚠️ PLACEHOLDER selector
});

/**
 * Assert a success toast/notification appeared with expected text.
 */
Cypress.Commands.add("assertSuccessToast", (expectedText) => {
  cy.get('[data-cy="toast-success"]', { timeout: 10000 }) // ⚠️ PLACEHOLDER selector
    .should("be.visible")
    .and("contain.text", expectedText);
});

/**
 * Fill a form field by data-cy attribute — reduces repetition in POM classes.
 */
Cypress.Commands.add("fillField", (dataCy, value) => {
  cy.get(`[data-cy="${dataCy}"]`).clear().type(value);
});

/**
 * Select a dropdown option by visible text (works for native <select>).
 */
Cypress.Commands.add("selectDropdown", (dataCy, visibleText) => {
  cy.get(`[data-cy="${dataCy}"]`).select(visibleText);
});

/**
 * Verify a file was downloaded successfully (for Reports module).
 */
Cypress.Commands.add("verifyFileDownloaded", (fileName) => {
  const downloadsFolder = Cypress.config("downloadsFolder");
  cy.readFile(`${downloadsFolder}/${fileName}`, { timeout: 15000 }).should("exist");
});
