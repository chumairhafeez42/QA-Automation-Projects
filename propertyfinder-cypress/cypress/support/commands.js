// ***********************************************
// Custom reusable Cypress commands for propertyfinder.ae
// ***********************************************

/**
 * Dismiss cookie-consent / GDPR banner if present.
 * Selector is best-effort since consent-tool vendors change; safe no-op if absent.
 */
Cypress.Commands.add("dismissCookieBanner", () => {
  cy.get("body").then(($body) => {
    const candidates = [
      "#onetrust-accept-btn-handler",
      'button:contains("Accept")',
      'button:contains("Accept All")',
      '[data-testid="cookie-accept"]',
    ];
    candidates.forEach((selector) => {
      if ($body.find(selector).length) {
        cy.get(selector).first().click({ force: true });
      }
    });
  });
});

/**
 * Wait for the property results grid to finish loading after a
 * search/filter action (skeleton loaders disappear, cards render).
 */
Cypress.Commands.add("waitForListingsToLoad", () => {
  cy.get('[class*="skeleton"]', { timeout: 15000 }).should("not.exist");
  cy.get('a[href*="/plp/"], a[href*="/property/"], [class*="property-card"], [class*="card-list"]', {
    timeout: 20000,
  }).should("have.length.greaterThan", 0);
});

/**
 * Count visible property cards on a listing/search page.
 */
Cypress.Commands.add("getPropertyCards", () => {
  return cy.get('a[href*="/plp/"], a[href*="/property/"], [class*="property-card"]');
});

/**
 * Assert current URL contains all given path fragments (order independent).
 */
Cypress.Commands.add("assertUrlContainsAll", (fragments = []) => {
  cy.url().then((url) => {
    fragments.forEach((fragment) => {
      expect(url).to.include(fragment);
    });
  });
});
