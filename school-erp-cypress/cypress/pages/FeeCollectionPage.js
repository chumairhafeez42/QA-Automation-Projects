class FeeCollectionPage {
  elements = {
    searchStudentInput: () => cy.get('[data-cy="fee-student-search"]'),
    selectStudentResult: (rollNo) => cy.get(`[data-cy="fee-student-result-${rollNo}"]`),
    feeTypeDropdown: () => cy.get('[data-cy="fee-type-dropdown"]'),
    amountInput: () => cy.get('[data-cy="fee-amount-input"]'),
    paymentModeDropdown: () => cy.get('[data-cy="payment-mode-dropdown"]'),
    paymentDateInput: () => cy.get('[data-cy="payment-date-input"]'),
    remarksInput: () => cy.get('[data-cy="fee-remarks-input"]'),
    collectButton: () => cy.get('[data-cy="collect-fee-btn"]'),
    receiptNumber: () => cy.get('[data-cy="fee-receipt-number"]'),
    printReceiptButton: () => cy.get('[data-cy="print-receipt-btn"]'),
    feeHistoryTab: () => cy.get('[data-cy="fee-history-tab"]'),
    feeHistoryRow: (receiptNo) => cy.get(`[data-cy="fee-history-row-${receiptNo}"]`),
  };

  visit() {
    cy.visit("/fees"); // ⚠️ PLACEHOLDER route
    return this;
  }

  searchAndSelectStudent(rollNo) {
    this.elements.searchStudentInput().type(rollNo);
    this.elements.selectStudentResult(rollNo).click();
    return this;
  }

  fillFeeForm(feeData) {
    this.elements.feeTypeDropdown().select(feeData.feeType);
    this.elements.amountInput().clear().type(feeData.amount);
    this.elements.paymentModeDropdown().select(feeData.paymentMode);
    this.elements.paymentDateInput().type(feeData.paymentDate);
    this.elements.remarksInput().type(feeData.remarks);
    return this;
  }

  collectFee() {
    this.elements.collectButton().click();
    return this;
  }

  assertReceiptGenerated() {
    this.elements.receiptNumber().should("be.visible");
    return this;
  }
}

export default new FeeCollectionPage();
