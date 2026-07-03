import MortgageCalculatorPage from "../../pages/MortgageCalculatorPage";

describe("Module 8: Mortgage Calculator", () => {
  beforeEach(() => {
    MortgageCalculatorPage.visit();
  });

  it("TC01 - should load the mortgage calculator with default estimate", () => {
    MortgageCalculatorPage.assertCalculatorVisible();
  });

  it("TC02 - should display all calculator sliders", () => {
    cy.contains("Purchase price").should("be.visible");
    cy.contains("Down payment").should("be.visible");
    cy.contains("Loan amount").should("be.visible");
    cy.contains("Loan period").should("be.visible");
    cy.contains("Interest rate").should("be.visible");
  });

  it("TC03 - should display residency status options", () => {
    cy.contains("UAE national").should("be.visible");
    cy.contains("UAE resident").should("be.visible");
    cy.contains("Non-resident").should("be.visible");
  });

  it("TC04 - should update the monthly payment estimate when purchase price changes", () => {
    MortgageCalculatorPage.assertMonthlyPaymentUpdates();
  });

  it("TC05 - should switch residency status to Non-resident", () => {
    MortgageCalculatorPage.selectResidencyStatus("Non-resident");
    cy.contains("Non-resident").should("be.visible");
  });

  it("TC06 - should reveal upfront costs when link is clicked", () => {
    MortgageCalculatorPage.elements.viewUpfrontCostsLink().click();
  });

  // NOTE: We intentionally do NOT fill in Name/Email/Phone and submit
  // "Get a mortgage quote" — this is a live production lead-gen form and
  // submitting fake data would create real records in PropertyFinder's system.
  it("TC07 - should display the lead capture form fields without submitting", () => {
    cy.contains("Please enter your details").scrollIntoView().should("be.visible");
    MortgageCalculatorPage.elements.nameInput().should("be.visible");
    MortgageCalculatorPage.elements.emailInput().should("be.visible");
    MortgageCalculatorPage.elements.phoneInput().should("be.visible");
    // Deliberately not clicking "Get a mortgage quote"
  });
});
