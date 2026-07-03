import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pages/HomePage";

Given("I am on the Carrefour UAE homepage", () => {
  HomePage.visit();
});

Then("the page title should contain {string}", (partialTitle) => {
  cy.title().should("include", partialTitle);
});

Then("the Carrefour logo should be visible", () => {
  HomePage.logo.should("be.visible");
});

Then("the search box should be visible", () => {
  HomePage.searchInput.should("be.visible");
});

Then("the {string} link should be visible", (linkText) => {
  cy.contains("a, button", new RegExp(`^${linkText}$`, "i")).should("be.visible");
});

Then("the {string} icon should be visible", (iconText) => {
  cy.contains("a, button", new RegExp(`^${iconText}$`, "i")).should("be.visible");
});

Then("at least {int} promotional banner should be visible", (count) => {
  HomePage.promoBanners.should("have.length.greaterThan", count - 1);
});

When("I click on the {string} category tile", (category) => {
  HomePage.openCategory(category);
});

Then("the URL should contain {string}", (fragment) => {
  cy.url().should("include", fragment);
});
