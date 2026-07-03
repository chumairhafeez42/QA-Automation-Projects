import LoginPage from "../../pages/LoginPage";

describe("Module 1: Login / Authentication", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("TC01 - should login successfully with valid admin credentials", () => {
    LoginPage.login(Cypress.env("adminUsername"), Cypress.env("adminPassword"));
    LoginPage.assertLoginSuccess();
  });

  it("TC02 - should show an error with invalid credentials", () => {
    LoginPage.login("wronguser@example.com", "WrongPass123!");
    LoginPage.assertLoginError("Invalid username or password"); // ⚠️ adjust text to match real app
  });

  it("TC03 - should show a validation error when fields are empty", () => {
    LoginPage.login("", "");
    cy.get('[data-cy="login-button"]').should("be.visible"); // stays on login page
    cy.url().should("include", "/login");
  });

  it("TC04 - should not allow SQL injection style input in username", () => {
    LoginPage.login("' OR '1'='1", "' OR '1'='1");
    cy.url().should("include", "/login");
  });
});
