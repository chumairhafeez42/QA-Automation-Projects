import "./commands";
import "cypress-mochawesome-reporter/register";

// PropertyFinder (Next.js app) throws benign hydration/analytics errors
// unrelated to test correctness — don't fail tests on those.
Cypress.on("uncaught:exception", (err) => {
  console.log("Uncaught exception ignored:", err.message);
  return false;
});

// Cookie/consent banners are common on propertyfinder.ae — dismiss automatically.
beforeEach(() => {
  cy.log(`Starting test: ${Cypress.currentTest.title}`);
  cy.dismissCookieBanner();
});

afterEach(function () {
  if (this.currentTest.state === "failed") {
    cy.screenshot(`FAILED-${this.currentTest.title}`);
  }
});
