import "./commands";

// Ignore uncaught exceptions thrown by the site's own JS (common on large
// e-commerce SPAs) so a single third-party script error doesn't fail the test.
Cypress.on("uncaught:exception", () => {
  return false;
});

// Close any cookie-consent / promo modal automatically before each scenario.
beforeEach(() => {
  cy.window().then((win) => {
    win.localStorage.setItem("cookieConsent", "true");
  });
});
