describe("Module 8: Logout", () => {
  beforeEach(() => {
    cy.loginAsAdmin();
  });

  it("TC01 - should logout successfully and redirect to login page", () => {
    cy.visit("/dashboard"); // ⚠️ PLACEHOLDER route
    cy.get('[data-cy="user-menu"]').click(); // ⚠️ PLACEHOLDER selector
    cy.get('[data-cy="logout-button"]').click(); // ⚠️ PLACEHOLDER selector
    cy.url().should("include", "/login");
  });

  it("TC02 - should not allow access to dashboard after logout", () => {
    cy.visit("/dashboard");
    cy.get('[data-cy="user-menu"]').click();
    cy.get('[data-cy="logout-button"]').click();

    cy.visit("/dashboard"); // attempt to revisit protected route
    cy.url().should("include", "/login"); // should redirect back
  });
});
