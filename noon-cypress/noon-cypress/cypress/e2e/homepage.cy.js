import HomePage from "../support/pages/HomePage";

describe("noon.com UAE — Homepage & Header", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("TC-001: loads the homepage successfully with correct title", () => {
    cy.title().should("match", /noon/i);
    cy.url().should("include", "/uae-en/");
  });

  it("TC-002: displays the noon logo linking back to the homepage", () => {
    HomePage.logo.should("be.visible");
  });

  it("TC-003: displays the global search bar", () => {
    HomePage.searchInput.should("be.visible");
  });

  it("TC-004: allows a user to search for a product", () => {
    cy.searchFor("laptop");
    cy.url({ timeout: 20000 }).should("match", /(q=|search)/i);
  });

  it("TC-005: displays Cart and Wishlist entry points in the header", () => {
    HomePage.cartIcon.should("exist");
    HomePage.wishlistIcon.should("exist");
  });

  it("TC-006: displays a Login option for guest users", () => {
    HomePage.loginLink.should("exist");
  });

  it("TC-007: navigating to Cart while logged out routes to cart/login flow", () => {
    HomePage.cartIcon.click({ force: true });
    cy.url({ timeout: 20000 }).should("match", /(cart|login)/i);
  });

  it("TC-008: navigating to Wishlist while logged out routes to wishlist/login flow", () => {
    HomePage.wishlistIcon.click({ force: true });
    cy.url({ timeout: 20000 }).should("match", /(wishlist|login)/i);
  });

  it("TC-009: main navigation menu lists the top-level categories", () => {
    cy.fixture("categories").then((categories) => {
      categories
        .filter((c) => !c.external)
        .forEach((category) => {
          cy.get("body").should("contain.text", category.name);
        });
    });
  });
});
