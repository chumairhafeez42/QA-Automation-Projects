class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-cy="username-input"]'), // ⚠️ PLACEHOLDER
    passwordInput: () => cy.get('[data-cy="password-input"]'), // ⚠️ PLACEHOLDER
    loginButton: () => cy.get('[data-cy="login-button"]'), // ⚠️ PLACEHOLDER
    errorMessage: () => cy.get('[data-cy="login-error"]'), // ⚠️ PLACEHOLDER
    forgotPasswordLink: () => cy.get('[data-cy="forgot-password-link"]'), // ⚠️ PLACEHOLDER
  };

  visit() {
    cy.visit("/login"); // ⚠️ PLACEHOLDER route
    return this;
  }

  login(username, password) {
    this.elements.usernameInput().clear().type(username);
    this.elements.passwordInput().clear().type(password, { log: false });
    this.elements.loginButton().click();
    return this;
  }

  assertLoginError(expectedMessage) {
    this.elements.errorMessage().should("be.visible").and("contain.text", expectedMessage);
    return this;
  }

  assertLoginSuccess() {
    cy.url().should("include", "/dashboard"); // ⚠️ PLACEHOLDER route
    return this;
  }
}

export default new LoginPage();
