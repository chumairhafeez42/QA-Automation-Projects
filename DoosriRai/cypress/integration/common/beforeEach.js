/// <reference types ="cypress"/>

beforeEach(function () {
  cy.visit("https://dev.doosrirai.pk");
  cy.get("#password_protected_pass")
    .type(Cypress.env("sitePassword"))
    .should("have.value", Cypress.env("sitePassword"));
  cy.get("#wp-submit").click();
});
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
