import HomePage from "../../pages/HomePage";
import SearchResultsPage from "../../pages/SearchResultsPage";

describe("Module 3: Buy Flow", () => {
  it("TC01 - should navigate to Buy section from homepage nav", () => {
    HomePage.visit();
    HomePage.goToBuy();
    cy.url().should("include", "/buy/properties-for-sale.html");
    cy.waitForListingsToLoad();
    SearchResultsPage.assertHasResults();
  });

  it("TC02 - should list villas for sale", () => {
    cy.visit("/en/buy/villas-for-sale.html");
    cy.waitForListingsToLoad();
    SearchResultsPage.assertHasResults();
  });

  it("TC03 - should list townhouses for sale", () => {
    cy.visit("/en/buy/townhouses-for-sale.html");
    cy.waitForListingsToLoad();
    SearchResultsPage.assertHasResults();
  });

  it("TC04 - should list land for sale", () => {
    cy.visit("/en/buy/land-for-sale.html");
    cy.waitForListingsToLoad();
  });

  it("TC05 - should navigate to commercial buy properties", () => {
    cy.visit("/en/commercial-buy/properties-for-sale.html");
    cy.waitForListingsToLoad();
  });

  it("TC06 - should open the Sold House Prices (transactions) page", () => {
    cy.visit("/en/transactions/buy/dubai");
    cy.get("h1, h2").should("be.visible");
  });
});
