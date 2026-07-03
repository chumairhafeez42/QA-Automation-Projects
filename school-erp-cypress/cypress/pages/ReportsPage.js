class ReportsPage {
  elements = {
    reportTypeDropdown: () => cy.get('[data-cy="report-type-dropdown"]'),
    classDropdown: () => cy.get('[data-cy="report-class-dropdown"]'),
    fromDateInput: () => cy.get('[data-cy="report-from-date"]'),
    toDateInput: () => cy.get('[data-cy="report-to-date"]'),
    generateButton: () => cy.get('[data-cy="generate-report-btn"]'),
    downloadPdfButton: () => cy.get('[data-cy="download-pdf-btn"]'),
    downloadExcelButton: () => cy.get('[data-cy="download-excel-btn"]'),
    reportTable: () => cy.get('[data-cy="report-table"]'),
    reportRowCount: () => cy.get('[data-cy="report-table"] tbody tr'),
  };

  visit() {
    cy.visit("/reports"); // ⚠️ PLACEHOLDER route
    return this;
  }

  generateReport({ reportType, className, fromDate, toDate }) {
    this.elements.reportTypeDropdown().select(reportType);
    if (className) this.elements.classDropdown().select(className);
    this.elements.fromDateInput().type(fromDate);
    this.elements.toDateInput().type(toDate);
    this.elements.generateButton().click();
    cy.waitForTableLoad();
    return this;
  }

  assertReportHasData() {
    this.elements.reportRowCount().should("have.length.greaterThan", 0);
    return this;
  }

  downloadAsPdf() {
    this.elements.downloadPdfButton().click();
    return this;
  }

  downloadAsExcel() {
    this.elements.downloadExcelButton().click();
    return this;
  }
}

export default new ReportsPage();
