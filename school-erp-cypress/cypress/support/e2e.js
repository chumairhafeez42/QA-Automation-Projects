// ***********************************************************
// This file runs before every single spec file.
// Global config, custom commands, and reporter hooks live here.
// ***********************************************************

import "./commands";
import "cypress-mochawesome-reporter/register";

// Prevents Cypress from failing tests due to uncaught app exceptions
// that are unrelated to the test itself (common with legacy school ERP apps).
Cypress.on("uncaught:exception", (err) => {
  console.log("Uncaught exception ignored:", err.message);
  return false;
});

// Preserve session/cookies between tests where needed (login persistence)
beforeEach(() => {
  cy.log(`Starting test: ${Cypress.currentTest.title}`);
});

afterEach(function () {
  if (this.currentTest.state === "failed") {
    cy.screenshot(`FAILED-${this.currentTest.title}`);
  }
});
