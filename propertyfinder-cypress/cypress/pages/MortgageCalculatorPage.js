class MortgageCalculatorPage {
  elements = {
    heading: () => cy.contains("h1", /Get the right mortgage/i),
    purchasePriceSlider: () => cy.contains("Purchase price").parent().find('input[type="range"]'),
    residencyStatusOptions: () => cy.contains(/UAE national|UAE resident|Non-resident/i),
    uaeNationalOption: () => cy.contains("button, label, div", "UAE national"),
    uaeResidentOption: () => cy.contains("button, label, div", "UAE resident"),
    nonResidentOption: () => cy.contains("button, label, div", "Non-resident"),
    downPaymentSlider: () => cy.contains("Down payment").parent().find('input[type="range"]'),
    loanAmountSlider: () => cy.contains("Loan amount").parent().find('input[type="range"]'),
    loanPeriodSlider: () => cy.contains("Loan period").parent().find('input[type="range"]'),
    interestRateSlider: () => cy.contains("Interest rate").parent().find('input[type="range"]'),
    monthlyPaymentResult: () => cy.contains("Monthly payment").parent(),
    viewUpfrontCostsLink: () => cy.contains("a, button", "View upfront costs"),
    getQuoteButton: () => cy.contains("button", /Get a mortgage quote/i),
    // ⚠️ Lead-capture fields — DO NOT submit real personal data against production
    nameInput: () => cy.get('input[name*="name" i], input[placeholder*="Name" i]'),
    emailInput: () => cy.get('input[type="email"], input[placeholder*="Email" i]'),
    phoneInput: () => cy.get('input[type="tel"], input[placeholder*="Phone" i]'),
  };

  visit() {
    cy.visit("/en/mortgage");
    return this;
  }

  assertCalculatorVisible() {
    this.elements.heading().should("be.visible");
    this.elements.monthlyPaymentResult().should("be.visible");
    return this;
  }

  selectResidencyStatus(status) {
    // status: "UAE national" | "UAE resident" | "Non-resident"
    cy.contains("button, label, div", status).click({ force: true });
    return this;
  }

  assertMonthlyPaymentUpdates() {
    this.elements.monthlyPaymentResult().invoke("text").then((before) => {
      // Move a slider using keyboard arrow keys (safe, no real data submitted)
      this.elements.purchasePriceSlider().focus().type("{rightarrow}{rightarrow}{rightarrow}");
      this.elements.monthlyPaymentResult().invoke("text").should((after) => {
        expect(after).not.to.eq(before);
      });
    });
    return this;
  }
}

export default new MortgageCalculatorPage();
