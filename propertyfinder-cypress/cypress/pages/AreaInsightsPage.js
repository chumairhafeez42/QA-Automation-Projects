class AreaInsightsPage {
  elements = {
    heading: () => cy.get("h1"),
    cityTabs: () => cy.contains("button, a", /Dubai|Abu Dhabi|Sharjah|Ajman/i),
    communityCard: (name) => cy.contains('article, li, [class*="community"]', name),
    exploreMoreLink: () => cy.contains("a", /See all|Explore/i),
  };

  visitDubai() {
    cy.visit("/en/area-insights/explore/dubai");
    return this;
  }

  visitCity(citySlug) {
    cy.visit(`/en/area-insights/explore/${citySlug}`);
    return this;
  }

  assertPageLoaded() {
    this.elements.heading().should("be.visible");
    return this;
  }
}

export default new AreaInsightsPage();
