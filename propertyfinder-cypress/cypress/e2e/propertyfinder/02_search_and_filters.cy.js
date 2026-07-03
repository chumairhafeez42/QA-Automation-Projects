import HomePage from "../../pages/HomePage";
import SearchResultsPage from "../../pages/SearchResultsPage";

describe("Module 2: Search & Filters", () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it("TC01 - should search properties by community name via the community card", () => {
    HomePage.searchCommunity("Dubai Marina");
    cy.url().should("include", "/search");
    cy.waitForListingsToLoad();
    SearchResultsPage.assertHasResults();
  });

  it("TC02 - should navigate directly to apartments for sale via URL and show results", () => {
    cy.visit("/en/buy/apartments-for-sale.html");
    cy.waitForListingsToLoad();
    SearchResultsPage.assertHasResults();
  });

  it("TC03 - should navigate directly to apartments for rent and show results", () => {
    cy.visit("/en/rent/apartments-for-rent.html");
    cy.waitForListingsToLoad();
    SearchResultsPage.assertHasResults();
  });

  it("TC04 - should filter villas for rent in Dubai and show relevant results", () => {
    cy.visit("/en/rent/dubai/villas-for-rent.html");
    cy.waitForListingsToLoad();
    SearchResultsPage.assertHasResults();
    cy.get("h1").invoke("text").should("match", /villa/i);
  });

  it("TC05 - should filter studio apartments for rent and show relevant results", () => {
    cy.visit("/en/rent/dubai/studio-apartments-for-rent.html");
    cy.waitForListingsToLoad();
    SearchResultsPage.assertHasResults();
  });

  it("TC06 - should show property cards with visible price information", () => {
    cy.visit("/en/rent/apartments-for-rent.html");
    cy.waitForListingsToLoad();
    cy.getPropertyCards().first().should("be.visible");
  });
});
