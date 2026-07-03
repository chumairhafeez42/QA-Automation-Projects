class HomePage {
  elements = {
    logo: () => cy.get('a[href="/"], a[href="https://www.propertyfinder.ae"]').first(),
    loginLink: () => cy.contains("a", "Log in"),

    // Top nav mega-menu items (confirmed present on homepage)
    navBuy: () => cy.contains("nav a, header a", "Buy"),
    navRent: () => cy.contains("nav a, header a", "Rent"),
    navNewProjects: () => cy.contains("nav a, header a", "New Projects"),
    navFindAgents: () => cy.contains("nav a, header a", "Find Agents"),

    // Search widget tabs
    rentTab: () => cy.contains('[role="tab"], button, a', "Rent"),
    buyTab: () => cy.contains('[role="tab"], button, a', "Buy"),
    newProjectsTab: () => cy.contains('[role="tab"], button, a', "New projects"),
    transactionsTab: () => cy.contains('[role="tab"], button, a', "Transactions"),
    agentsTab: () => cy.contains('[role="tab"], button, a', "Agents"),

    // Search widget filters (visible text confirmed from live page)
    propertyTypeFilter: () => cy.contains("button, div", "Property type"),
    bedsBathsFilter: () => cy.contains("button, div", "Beds & Baths"),
    priceFilter: () => cy.contains("button, div", "Price"),
    amenitiesFilter: () => cy.contains("button, div", "Amenities"),
    areaFilter: () => cy.contains("button, div", "Area (sqft)"),
    searchInput: () =>
      cy.get('input[placeholder*="location" i], input[placeholder*="search" i], input[type="search"]').first(),
    searchButton: () => cy.contains("button", "Search"),

    // Popular community cards on homepage (Palm Jumeirah, Downtown Dubai, etc.)
    communitySearchLink: (communityName) =>
      cy.contains('[class*="community"], article, li', communityName).find('a:contains("Search")'),

    // Footer city tabs (Dubai, Al Ain, Ajman, Abu Dhabi, Sharjah, etc.)
    footerCityTab: (cityName) => cy.contains("footer button, footer a, footer li", cityName),
  };

  visit() {
    cy.visit("/");
    return this;
  }

  goToBuy() {
    this.elements.navBuy().click();
    return this;
  }

  goToRent() {
    this.elements.navRent().click();
    return this;
  }

  goToNewProjects() {
    this.elements.navNewProjects().click();
    return this;
  }

  goToFindAgents() {
    this.elements.navFindAgents().click();
    return this;
  }

  searchByLocationText(text) {
    this.elements.searchInput().clear().type(text);
    cy.wait(500); // allow autocomplete dropdown to render
    return this;
  }

  clickSearch() {
    this.elements.searchButton().click();
    return this;
  }

  searchCommunity(communityName) {
    cy.contains("h3, h2", communityName)
      .parents('article, li, [class*="community"]')
      .first()
      .within(() => {
        cy.contains("a", "Search").click();
      });
    return this;
  }
}

export default new HomePage();
