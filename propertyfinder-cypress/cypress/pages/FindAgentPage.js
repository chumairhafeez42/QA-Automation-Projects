class FindAgentPage {
  elements = {
    heading: () => cy.get("h1"),
    searchInput: () => cy.get('input[placeholder*="agent" i], input[placeholder*="search" i]').first(),
    agentCards: () => cy.get('[class*="agent-card"], article'),
    filterByCity: () => cy.contains("button, div", /Dubai|Abu Dhabi/i),
  };

  visit() {
    cy.visit("/en/find-agent");
    return this;
  }

  assertPageLoaded() {
    cy.url().should("include", "/find-agent");
    return this;
  }
}

export default new FindAgentPage();
