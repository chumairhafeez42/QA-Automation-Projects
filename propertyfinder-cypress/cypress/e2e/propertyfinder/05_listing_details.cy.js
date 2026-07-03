import SearchResultsPage from "../../pages/SearchResultsPage";
import ListingDetailsPage from "../../pages/ListingDetailsPage";

describe("Module 5: Listing Details Page", () => {
  beforeEach(() => {
    cy.visit("/en/rent/apartments-for-rent.html");
    cy.waitForListingsToLoad();
  });

  it("TC01 - should open a property listing from search results", () => {
    SearchResultsPage.openFirstProperty();
    cy.url().should("not.include", "apartments-for-rent.html");
  });

  it("TC02 - should display the property title and price on the details page", () => {
    SearchResultsPage.openFirstProperty();
    ListingDetailsPage.assertTitleVisible();
    ListingDetailsPage.assertPriceVisible();
  });

  it("TC03 - should display an image gallery on the details page", () => {
    SearchResultsPage.openFirstProperty();
    cy.get("img").its("length").should("be.gt", 0);
  });

  it("TC04 - should display agent/broker contact information", () => {
    SearchResultsPage.openFirstProperty();
    cy.contains(/call|whatsapp|contact|email/i).should("exist");
  });

  it("TC05 - should navigate back to results using browser back", () => {
    SearchResultsPage.openFirstProperty();
    cy.go("back");
    cy.url().should("include", "apartments-for-rent.html");
  });
});
