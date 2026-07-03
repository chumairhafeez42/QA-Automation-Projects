class HomePage {
  visit() {
    cy.visit("/uae-en/");
    return this;
  }

  get logo() {
    return cy.get("a[href='/uae-en/'] img, [class*='logo']").first();
  }

  get searchInput() {
    return cy.get("input[type='search'], input[placeholder*='Search' i]").first();
  }

  get cartIcon() {
    return cy.contains("a", /cart/i);
  }

  get wishlistIcon() {
    return cy.contains("a", /wishlist/i);
  }

  get loginLink() {
    return cy.contains(/log ?in/i);
  }

  // Top navigation category links, e.g. "Electronics", "Beauty & Fragrance", etc.
  categoryLink(categoryName) {
    return cy.get("nav, [class*='nav'], [class*='sidebar']").first()
      .contains("a", categoryName);
  }

  openCategoryByHref(hrefFragment) {
    cy.get(`a[href*='${hrefFragment}']`).first().click({ force: true });
    return this;
  }
}

export default new HomePage();
