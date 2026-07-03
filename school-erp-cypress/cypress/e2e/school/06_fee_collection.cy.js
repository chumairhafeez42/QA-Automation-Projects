import FeeCollectionPage from "../../pages/FeeCollectionPage";
import { generateFeePayment } from "../../support/dataGenerator";

describe("Module 6: Fee Collection", () => {
  let feePayment;
  const rollNo = "1001"; // ⚠️ PLACEHOLDER — existing student roll number

  beforeEach(() => {
    cy.loginAsAdmin();
    feePayment = generateFeePayment();
    FeeCollectionPage.visit();
  });

  it("TC01 - should collect a fee payment and generate a receipt", () => {
    FeeCollectionPage.searchAndSelectStudent(rollNo);
    FeeCollectionPage.fillFeeForm(feePayment);
    FeeCollectionPage.collectFee();
    FeeCollectionPage.assertReceiptGenerated();
  });

  it("TC02 - should reject a negative or zero fee amount", () => {
    FeeCollectionPage.searchAndSelectStudent(rollNo);
    FeeCollectionPage.fillFeeForm({ ...feePayment, amount: "-500" });
    FeeCollectionPage.collectFee();
    cy.get('[data-cy="toast-error"]').should("be.visible"); // ⚠️ PLACEHOLDER
  });

  it("TC03 - should show the payment in fee history after collection", () => {
    FeeCollectionPage.searchAndSelectStudent(rollNo);
    FeeCollectionPage.fillFeeForm(feePayment);
    FeeCollectionPage.collectFee();

    FeeCollectionPage.elements.feeHistoryTab().click();
    cy.get('[data-cy="data-table"]').should("contain.text", feePayment.amount);
  });

  it("TC04 - should allow printing the receipt", () => {
    FeeCollectionPage.searchAndSelectStudent(rollNo);
    FeeCollectionPage.fillFeeForm(feePayment);
    FeeCollectionPage.collectFee();
    FeeCollectionPage.assertReceiptGenerated();
    FeeCollectionPage.elements.printReceiptButton().should("be.visible").click();
  });
});
