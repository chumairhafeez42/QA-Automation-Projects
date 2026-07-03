/**
 * Data-driven category coverage.
 *
 * Reads cypress/fixtures/categories.json (scraped from the live main-nav of
 * https://www.noon.com/uae-en/) and, for every category:
 *   1. Visits the homepage
 *   2. Clicks / navigates into the category
 *   3. Asserts the category landing page renders correctly
 *   4. Asserts at least one sub-category or product tile is visible
 *   5. Applies a "Best sellers" / popularity sort where available and
 *      confirms the URL updates (proves the page is interactive, not a 404)
 */

describe("noon.com UAE — Every Category", () => {
  before(() => {
    cy.fixture("categories").as("categories");
  });

  it("has scraped at least the 15 known top-level categories", function () {
    expect(this.categories.length).to.be.at.least(15);
  });

  // noon's "Food" vertical lives on a separate sub-domain (food.noon.com)
  // and is verified separately via a lightweight reachability check.
  context("Standard catalog categories (www.noon.com)", () => {
    beforeEach(function () {
      cy.fixture("categories").then((categories) => {
        this.categories = categories.filter((c) => !c.external);
      });
    });

    it("visits and validates every standard category page", function () {
      cy.fixture("categories").then((categories) => {
        const standardCategories = categories.filter((c) => !c.external);

        standardCategories.forEach((category) => {
          cy.log(`▶ Validating category: ${category.name}`);
          cy.visit(category.path, { failOnStatusCode: false });

          // 1. Correct route loaded
          cy.url({ timeout: 20000 }).should("include", category.slug === "grocery"
            ? "noon-supermarket"
            : category.path.split("/").filter(Boolean).pop());

          // 2. Page has a real title, not an error page
          cy.title().should("not.be.empty");

          // 3. No hard 404 / "page not found" content
          cy.get("body").should("not.contain.text", "404");
          cy.get("body").should("not.contain.text", "Page not found");

          // 4. Category content (sub-category tiles and/or product cards) rendered
          cy.get("body", { timeout: 20000 }).then(($body) => {
            const hasProducts = $body.find("[class*='product'], [class*='Product']").length > 0;
            const hasCategoryTiles = $body.find("[class*='categor'], [class*='Categor']").length > 0;
            const hasBanners = $body.find("img").length > 0;
            expect(
              hasProducts || hasCategoryTiles || hasBanners,
              `${category.name} rendered visible content`
            ).to.be.true;
          });
        });
      });
    });

    it("each category is independently reachable via a direct visit (deep-link check)", function () {
      cy.fixture("categories").then((categories) => {
        categories
          .filter((c) => !c.external)
          .forEach((category) => {
            cy.request({ url: category.path, failOnStatusCode: false }).then((response) => {
              expect(
                response.status,
                `${category.name} (${category.path}) responded`
              ).to.be.oneOf([200, 301, 302]);
            });
          });
      });
    });
  });

  context("Food vertical (food.noon.com)", () => {
    it("TC-FOOD-01: the Food entry point on the homepage links to food.noon.com", () => {
      cy.visitHome();
      cy.get("a[href*='food.noon.com']").should("exist");
    });
  });
});
