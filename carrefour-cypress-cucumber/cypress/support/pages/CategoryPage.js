/**
 * Generic Category Listing Page (CLP/PLP) Page Object.
 *
 * Carrefour UAE renders every category page (Fruit, Beverages, Electronics,
 * etc.) with the same underlying listing template, just different data.
 * Rather than writing one Page Object per category, this class is
 * parameterized by the category's path and reused for all of them — see
 * cypress/fixtures/categories.json for the full list this drives.
 */
class CategoryPage {
  visit(path) {
    cy.visit(path);
    cy.dismissPopups();
    return this;
  }

  get breadcrumb() {
    return cy.get('[data-testid="breadcrumb"], nav[aria-label="breadcrumb"]');
  }

  get pageHeading() {
    return cy.get('h1, [data-testid="plp-title"], [data-testid="clp-title"]').first();
  }

  get productGrid() {
    return cy.get('[data-testid="product-grid"], [data-testid="plp-grid"]');
  }

  get productCards() {
    return cy.get('[data-testid="product-card"], article, li[class*="product"]');
  }

  get subCategoryChips() {
    return cy.get('[data-testid="subcategory-chip"], [class*="subcategory"] a, [class*="chip"] a');
  }

  get sortDropdown() {
    return cy.get('[data-testid="sort-dropdown"], select[name*="sort"]').first();
  }

  get filterPanel() {
    return cy.get('[data-testid="filters-panel"], aside[class*="filter"]');
  }

  get promoTiles() {
    return cy.get('[data-testid="promo-tile"], [class*="banner"] img, [class*="promo"] img');
  }

  get paginationControls() {
    return cy.get('[data-testid="pagination"], nav[aria-label*="pagination" i]');
  }

  get loadMoreButton() {
    return cy.contains("button", /load more|show more/i);
  }

  get emptyStateMessage() {
    return cy.contains(/no results|no products found|nothing here/i);
  }

  hasVisibleContent() {
    // A category page is considered "healthy" if it renders either a
    // product grid with cards OR (for hub/landing-style category pages)
    // promo tiles / sub-category navigation, since Carrefour mixes PLP-style
    // and CLP (hub) style pages under /c/ and /n/c/.
    return cy.get("body").then(($body) => {
      const hasProducts = $body.find(
        '[data-testid="product-card"], article, li[class*="product"]'
      ).length > 0;
      const hasPromoTiles = $body.find(
        '[data-testid="promo-tile"], [class*="banner"] img, [class*="promo"] img'
      ).length > 0;
      const hasSubcats = $body.find(
        '[data-testid="subcategory-chip"], [class*="subcategory"] a'
      ).length > 0;

      expect(
        hasProducts || hasPromoTiles || hasSubcats,
        "category page should render products, promo tiles, or sub-category links"
      ).to.be.true;
    });
  }

  selectSortOption(optionText) {
    this.sortDropdown.select(optionText, { force: true });
    return this;
  }
}

export default new CategoryPage();
