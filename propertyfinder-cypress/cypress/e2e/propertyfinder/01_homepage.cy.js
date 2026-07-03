import HomePage from "../../pages/HomePage";

describe("Module 1: Homepage", () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it("TC01 - should load the homepage successfully", () => {
    cy.url().should("eq", "https://www.propertyfinder.ae/");
    cy.title().should("include", "Property Finder");
  });

  it("TC02 - should display the main navigation items", () => {
    cy.contains("nav, header", "Buy").should("be.visible");
    cy.contains("nav, header", "Rent").should("be.visible");
    cy.contains("nav, header", "New Projects").should("be.visible");
    cy.contains("nav, header", "Find Agents").should("be.visible");
  });

  it("TC03 - should display the hero search widget with tabs", () => {
    cy.contains("Your home search starts here").should("be.visible");
    cy.contains("Rent").should("be.visible");
    cy.contains("Buy").should("be.visible");
  });

  it("TC04 - should display popular community cards", () => {
    cy.contains("Search by top communities").scrollIntoView().should("be.visible");
    cy.contains("Palm Jumeirah").should("be.visible");
    cy.contains("Downtown Dubai").should("be.visible");
    cy.contains("Dubai Marina").should("be.visible");
  });

  it("TC05 - should display the mortgage pre-approval section", () => {
    cy.contains("mortgage pre-approval").scrollIntoView().should("be.visible");
  });

  it("TC06 - should display the footer with app download links", () => {
    cy.get("footer").scrollIntoView().should("be.visible");
    cy.get('a[href*="apps.apple.com"]').should("exist");
    cy.get('a[href*="play.google.com"]').should("exist");
  });

  it("TC07 - should navigate to the login page when Log in is clicked", () => {
    cy.contains("a, button", "Log in").click();
    cy.url().should("not.eq", "https://www.propertyfinder.ae/");
  });
});
