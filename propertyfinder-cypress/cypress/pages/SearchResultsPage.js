class SearchResultsPage {
  elements = {
    resultsHeading: () => cy.get("h1"),
    propertyCards: () => cy.get('a[href*="/plp/"], a[href*="/property/"], [class*="property-card"]'),
    firstCard: () => this.elements.propertyCards().first(),
    sortDropdown: () => cy.contains("button, div", /Sort by|Sort/i),
    priceOnCard: (cardIndex = 0) =>
      this.elements.propertyCards().eq(cardIndex).find('[class*="price"]'),
    bedsFilterChip: () => cy.contains("button, div", "Beds & Baths"),
    clearFiltersButton: () => cy.contains("button, a", /Clear|Reset/i),
    paginationNext: () => cy.contains('a, button', /Next/i),
    noResultsMessage: () => cy.contains(/no results|no properties found/i),
    resultsCountText: () => cy.contains(/properties|results/i),
  };

  assertOnResultsPage() {
    cy.url().should("match", /\/(buy|rent|commercial-buy|commercial-rent)\//);
    return this;
  }

  assertHasResults() {
    this.elements.propertyCards().should("have.length.greaterThan", 0);
    return this;
  }

  openFirstProperty() {
    this.elements.firstCard().click({ force: true });
    return this;
  }

  clickBedsBathsFilter() {
    this.elements.bedsFilterChip().click();
    return this;
  }
}

export default new SearchResultsPage();
