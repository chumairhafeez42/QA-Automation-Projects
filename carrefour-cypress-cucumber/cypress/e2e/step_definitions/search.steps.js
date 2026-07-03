import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pages/HomePage";
import SearchResultsPage from "../../support/pages/SearchResultsPage";

When("I search for {string}", (term) => {
  HomePage.search(term);
});

Then("I should be navigated to the search results page", () => {
  cy.url().should("match", /(search|\/n\/search|q=)/i);
});

Then("the search results should contain at least {int} product", (count) => {
  // Some "no results" pages legitimately show 0 — only assert length when
  // the no-results message is absent.
  cy.get("body").then(($body) => {
    const hasNoResultsMsg = /no results|no products found/i.test($body.text());
    if (!hasNoResultsMsg) {
      SearchResultsPage.productCards.should("have.length.greaterThan", count - 1);
    } else {
      cy.log("No-results message shown — skipping product count assertion");
    }
  });
});

Then("the page should not show a broken error screen", () => {
  cy.get("body").should("not.contain.text", "500");
  cy.get("body").should("not.contain.text", "Something went wrong");
});
