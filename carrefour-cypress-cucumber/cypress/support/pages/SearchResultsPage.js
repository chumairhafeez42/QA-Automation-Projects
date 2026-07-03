/**
 * Page Object for the Search Results Listing Page (SRP/PLP).
 */
class SearchResultsPage {
  get pageTitle() {
    return cy.get('h1, [data-testid="plp-title"]').first();
  }

  get productCards() {
    return cy.get('[data-testid="product-card"], article, li[class*="product"]');
  }

  get sortDropdown() {
    return cy.get('[data-testid="sort-dropdown"], select[name*="sort"]').first();
  }

  get filterPanel() {
    return cy.get('[data-testid="filters-panel"], aside[class*="filter"]');
  }

  get noResultsMessage() {
    return cy.contains(/no results|no products found/i);
  }

  getProductCardByIndex(index) {
    return this.productCards.eq(index);
  }

  addFirstProductToCart() {
    this.productCards
      .first()
      .within(() => {
        cy.contains("button", /add/i).click({ force: true });
      });
    return this;
  }

  resultsCountIsGreaterThanZero() {
    this.productCards.should("have.length.greaterThan", 0);
    return this;
  }
}

export default new SearchResultsPage();
