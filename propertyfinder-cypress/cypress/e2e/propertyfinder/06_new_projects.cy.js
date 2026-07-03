import HomePage from "../../pages/HomePage";

describe("Module 6: New Projects", () => {
  it("TC01 - should navigate to New Projects from homepage nav", () => {
    HomePage.visit();
    HomePage.goToNewProjects();
    cy.url().should("include", "/new-projects");
  });

  it("TC02 - should list new projects in Dubai", () => {
    cy.visit("/en/new-projects/lp/dubai");
    cy.get("h1, h2").should("be.visible");
  });

  it("TC03 - should list new projects in Abu Dhabi", () => {
    cy.visit("/en/new-projects/lp/abu-dhabi");
    cy.get("h1, h2").should("be.visible");
  });

  it("TC04 - should display developer listing page (Emaar Properties)", () => {
    cy.visit("/en/new-projects/dev-lp/emaar-properties");
    cy.contains("Emaar").should("be.visible");
  });

  it("TC05 - should open the developer directory for the UAE", () => {
    cy.visit("/en/new-projects/dev-list/uae");
    cy.get("h1, h2").should("be.visible");
  });

  it("TC06 - should open a specific new project detail page", () => {
    cy.visit("/en/new-projects");
    cy.contains("a", /off-plan|from \d/i, { timeout: 15000 })
      .first()
      .click({ force: true });
    cy.url().should("include", "/new-projects/");
  });

  it("TC07 - should show off-plan properties listing", () => {
    cy.visit("/en/for-sale/off-plan/properties");
    cy.get("h1, h2").should("be.visible");
  });
});
