class ListingDetailsPage {
  elements = {
    propertyTitle: () => cy.get("h1"),
    propertyPrice: () => cy.get('[class*="price"]').first(),
    imageGallery: () => cy.get('[class*="gallery"], [class*="carousel"]').first(),
    galleryNextButton: () => cy.get('[class*="gallery"] button[aria-label*="next" i]').first(),
    propertyDetailsSection: () => cy.contains(/Property details|Property information/i),
    agentCard: () => cy.get('[class*="agent"], [class*="broker"]').first(),
    contactAgentButton: () => cy.contains("button, a", /Call|WhatsApp|Email|Contact/i).first(),
    whatsappButton: () => cy.contains("button, a", /WhatsApp/i),
    saveButton: () => cy.contains("button", /Save|Shortlist/i),
    shareButton: () => cy.contains("button", /Share/i),
    similarPropertiesSection: () => cy.contains(/Similar properties|You may also like/i),
    breadcrumbs: () => cy.get('[class*="breadcrumb"], nav[aria-label*="breadcrumb" i]'),
    amenitiesList: () => cy.contains(/Amenities|Features/i),
    reportListingLink: () => cy.contains("a, button", /Report this listing/i),
  };

  assertOnDetailsPage() {
    cy.url().should("match", /\/(plp|property)\//);
    return this;
  }

  assertTitleVisible() {
    this.elements.propertyTitle().should("be.visible");
    return this;
  }

  assertPriceVisible() {
    this.elements.propertyPrice().should("be.visible");
    return this;
  }

  scrollToAgentSection() {
    this.elements.agentCard().scrollIntoView().should("be.visible");
    return this;
  }
}

export default new ListingDetailsPage();
