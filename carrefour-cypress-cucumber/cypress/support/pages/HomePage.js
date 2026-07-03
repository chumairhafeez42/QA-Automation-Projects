/**
 * Page Object for https://www.carrefouruae.com/mafuae/en
 *
 * NOTE: Carrefour UAE is a large, frequently-updated storefront. Selectors
 * below use a mix of data-testid (preferred, stable) and semantic/text
 * fallbacks. If the site markup changes, update the getters here only —
 * step definitions should never contain raw selectors.
 */
class HomePage {
  visit() {
    cy.visit(Cypress.env("startPath") || "/mafuae/en");
    cy.dismissPopups();
    return this;
  }

  get logo() {
    return cy.get('a[href="/"], header a[aria-label*="Carrefour"]').first();
  }

  get searchInput() {
    return cy.get('input[type="search"], [data-testid="search-box-input"]').first();
  }

  get searchButton() {
    return cy.get('[data-testid="search-box-submit"], button[type="submit"]').first();
  }

  get cartIcon() {
    return cy.contains("a, button", /^Cart$/i);
  }

  get profileIcon() {
    return cy.contains("a, button", /^Profile$/i);
  }

  get categoriesLink() {
    return cy.contains("a", /^Categories$/i);
  }

  get topCategoryTiles() {
    return cy.get('[data-testid="category-tile"], a[href*="/mafuae/en/c/"]');
  }

  get promoBanners() {
    return cy.get('[data-testid="hero-banner"] img, [class*="banner"] img');
  }

  get deliveryLocationLabel() {
    return cy.get('[data-testid="delivery-address"], [class*="delivery"]').first();
  }

  search(term) {
    this.searchInput.clear({ force: true }).type(term, { force: true });
    this.searchInput.type("{enter}");
    return this;
  }

  openCategory(categoryName) {
    cy.contains("a", categoryName).click({ force: true });
    return this;
  }

  goToCart() {
    this.cartIcon.click({ force: true });
    return this;
  }
}

export default new HomePage();
