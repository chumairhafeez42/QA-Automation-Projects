/**
 * For every main category, this spec dynamically discovers the sub-category
 * links rendered on that category's landing page (rather than hardcoding
 * noon's full taxonomy, which changes frequently) and validates a sample of
 * them actually navigate to working listing pages.
 */

describe("noon.com UAE — Sub-Category Navigation", () => {
  const SAMPLE_SIZE = 3; // sub-categories validated per main category

  beforeEach(function () {
    cy.fixture("categories").then((categories) => {
      this.categories = categories.filter((c) => !c.external);
    });
  });

  it("discovers and validates sub-category links for every main category", function () {
    cy.fixture("categories").then((categories) => {
      const standardCategories = categories.filter((c) => !c.external);

      standardCategories.forEach((category) => {
        cy.log(`▶ Discovering sub-categories for: ${category.name}`);
        cy.visit(category.path, { failOnStatusCode: false });

        cy.get("a[href*='/uae-en/']", { timeout: 20000 })
          .then(($links) => {
            const hrefs = [...new Set(
              $links
                .map((_, el) => el.getAttribute("href"))
                .get()
                .filter(
                  (href) =>
                    href &&
                    href.includes("/uae-en/") &&
                    href !== category.path &&
                    !href.includes("wishlist") &&
                    !href.includes("cart")
                )
            )].slice(0, SAMPLE_SIZE);

            cy.wrap(hrefs).each((href) => {
              cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                expect(
                  response.status,
                  `${category.name} sub-link ${href} responded`
                ).to.be.oneOf([200, 301, 302]);
              });
            });
          });
      });
    });
  });
});
