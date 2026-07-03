// ***********************************************
// Custom commands for noon.com UAE automation
// ***********************************************

/**
 * Visits the noon.com UAE homepage and waits for the header to render.
 */
Cypress.Commands.add("visitHome", () => {
  cy.visit("/uae-en/");
  cy.get("header, [class*='header']", { timeout: 20000 }).should("be.visible");
});

/**
 * Asserts that a category landing page loaded successfully:
 * - URL matches the expected category path
 * - Page has a non-empty <title>
 * - At least one product / category tile grid renders
 */
Cypress.Commands.add("assertCategoryPageLoaded", (expectedPathFragment) => {
  cy.url({ timeout: 20000 }).should("include", expectedPathFragment);
  cy.title().should("not.be.empty");
  // noon renders product/sub-category cards inside elements whose class
  // contains "productContainer", "categoryCard" or similar. We assert the
  // main content area rendered rather than binding to one brittle selector.
  cy.get("body").then(($body) => {
    const hasProducts = $body.find("[class*='product'], [class*='Product']").length > 0;
    const hasCategoryGrid = $body.find("[class*='categor'], [class*='Categor']").length > 0;
    expect(hasProducts || hasCategoryGrid, "category content rendered").to.be.true;
  });
});

/**
 * Searches for a term using the global search bar.
 */
Cypress.Commands.add("searchFor", (term) => {
  cy.get("input[type='search'], input[placeholder*='Search' i]", { timeout: 15000 })
    .first()
    .clear()
    .type(`${term}{enter}`);
});
