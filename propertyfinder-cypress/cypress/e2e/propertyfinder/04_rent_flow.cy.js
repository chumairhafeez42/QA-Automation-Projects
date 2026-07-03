import HomePage from "../../pages/HomePage";
import SearchResultsPage from "../../pages/SearchResultsPage";

describe("Module 4: Rent Flow", () => {
  it("TC01 - should navigate to Rent section from homepage nav", () => {
    HomePage.visit();
    HomePage.goToRent();
    cy.url().should("include", "/rent/properties-for-rent.html");
    cy.waitForListingsToLoad();
    SearchResultsPage.assertHasResults();
  });

  it("TC02 - should list studios for rent", () => {
    cy.visit("/en/rent/studio-apartments-for-rent.html");
    cy.waitForListingsToLoad();
    SearchResultsPage.assertHasResults();
  });

  it("TC03 - should list villas for rent", () => {
    cy.visit("/en/rent/villas-for-rent.html");
    cy.waitForListingsToLoad();
    SearchResultsPage.assertHasResults();
  });

  it("TC04 - should list townhouses for rent", () => {
    cy.visit("/en/rent/townhouses-for-rent.html");
    cy.waitForListingsToLoad();
  });

  it("TC05 - should show short-term / monthly rental listings", () => {
    cy.visit("/en/rent/properties-for-rent-monthly.html");
    cy.waitForListingsToLoad();
  });

  it("TC06 - should navigate to commercial rent properties", () => {
    cy.visit("/en/commercial-rent/properties-for-rent.html");
    cy.waitForListingsToLoad();
  });

  it("TC07 - should open the Rented House Prices (transactions) page", () => {
    cy.visit("/en/transactions/rent/dubai");
    cy.get("h1, h2").should("be.visible");
  });
});
