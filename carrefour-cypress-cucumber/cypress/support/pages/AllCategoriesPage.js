/**
 * Page Object for the master "All Categories" directory page
 * (https://www.carrefouruae.com/mafuae/en/all-categories), reached from the
 * "Categories" link in the header.
 */
class AllCategoriesPage {
  visit() {
    cy.visit("/mafuae/en/all-categories");
    cy.dismissPopups();
    return this;
  }

  get categoryGroups() {
    return cy.get('[data-testid="category-group"], section[class*="category"]');
  }

  get categoryLinks() {
    return cy.get('a[href*="/c/"], a[href*="/n/c/"]');
  }

  get pageHeading() {
    return cy.get("h1").first();
  }

  clickCategoryByName(name) {
    cy.contains("a", name).click({ force: true });
    return this;
  }
}

export default new AllCategoriesPage();
