import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pages/HomePage";
import CategoryPage from "../../support/pages/CategoryPage";
import AllCategoriesPage from "../../support/pages/AllCategoriesPage";

// A single source of truth mapping the human-readable category name used in
// feature files to its live URL path. Kept in sync with
// cypress/fixtures/categories.json.
let categoryPathByName = {};

before(() => {
  cy.fixture("categories").then((data) => {
    categoryPathByName = data.categories.reduce((acc, cat) => {
      acc[cat.name] = cat.path;
      return acc;
    }, {});
  });
});

When("I open the {string} header link", (linkText) => {
  cy.contains("a, button", new RegExp(`^${linkText}$`, "i")).click({ force: true });
});

Then("I should be on the all-categories directory page", () => {
  cy.url().should("include", "/all-categories");
});

Then("the directory page should list category links", () => {
  AllCategoriesPage.categoryLinks.should("have.length.greaterThan", 0);
});

When("I visit the {string} category page directly", (categoryName) => {
  const path = categoryPathByName[categoryName];
  expect(path, `No fixture path found for category "${categoryName}"`).to.exist;
  CategoryPage.visit(path);
});

Then("the category page should render successfully", () => {
  cy.url().should("include", "/mafuae/en");
  CategoryPage.hasVisibleContent();
});

Then("the category page should not show a broken error screen", () => {
  cy.get("body").should("not.contain.text", "500");
  cy.get("body").should("not.contain.text", "Something went wrong");
  cy.get("body").should("not.contain.text", "404");
});

Given("I sweep every category defined in the categories fixture", () => {
  cy.fixture("categories").then((data) => {
    data.categories.forEach((category) => {
      cy.log(`Visiting category: ${category.name} (${category.path})`);
      CategoryPage.visit(category.path);
      CategoryPage.hasVisibleContent();
      cy.get("body").should("not.contain.text", "500");
      cy.get("body").should("not.contain.text", "Something went wrong");
    });
  });
});

Then("all visited category pages should have loaded without a broken error screen", () => {
  // The per-category assertions already ran inside the sweep step above;
  // this step exists for Gherkin readability and as a final checkpoint.
  cy.log("Category sweep complete — see log above for per-category results");
});

When("products are present on the page", () => {
  CategoryPage.productCards.its("length").then((len) => {
    if (len === 0) {
      cy.log("No product cards on this category page — skipping sort interaction");
    }
  });
});

Then("I should be able to change the sort order without an error", () => {
  cy.get("body").then(($body) => {
    const hasSort =
      $body.find('[data-testid="sort-dropdown"], select[name*="sort"]').length > 0;
    if (hasSort) {
      CategoryPage.sortDropdown
        .find("option")
        .then((options) => {
          if (options.length > 1) {
            const targetValue = options.eq(1).val();
            CategoryPage.sortDropdown.select(targetValue, { force: true });
          }
        });
      cy.get("body").should("not.contain.text", "Something went wrong");
    } else {
      cy.log("No sort control found on this category page — skipping");
    }
  });
});
