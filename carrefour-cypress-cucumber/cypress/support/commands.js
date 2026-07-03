// Dismiss the delivery-location / cookie / app-promo popups that Carrefour UAE
// frequently shows on first load. Each dismiss is wrapped so a missing
// element never fails the test.
Cypress.Commands.add("dismissPopups", () => {
  const closableSelectors = [
    '[data-testid="modal-close-button"]',
    '[aria-label="Close"]',
    ".onetrust-close-btn-handler",
    "#onetrust-accept-btn-handler",
  ];

  closableSelectors.forEach((selector) => {
    cy.get("body").then(($body) => {
      if ($body.find(selector).length) {
        cy.get(selector).first().click({ force: true });
      }
    });
  });
});

// Generic "type into search box and submit" helper, kept here since several
// features reuse it.
Cypress.Commands.add("searchFor", (term) => {
  cy.get('[data-testid="search-box-input"], input[type="search"]')
    .first()
    .clear({ force: true })
    .type(term, { force: true })
    .type("{enter}");
});
