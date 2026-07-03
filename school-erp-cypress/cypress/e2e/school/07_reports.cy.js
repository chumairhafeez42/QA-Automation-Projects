import ReportsPage from "../../pages/ReportsPage";

describe("Module 7: Reports", () => {
  const fromDate = "2026-01-01";
  const toDate = "2026-07-03";

  beforeEach(() => {
    cy.loginAsAdmin();
    ReportsPage.visit();
  });

  it("TC01 - should generate an attendance report with data", () => {
    ReportsPage.generateReport({
      reportType: "Attendance Report",
      className: "Class 1",
      fromDate,
      toDate,
    });
    ReportsPage.assertReportHasData();
  });

  it("TC02 - should generate a fee collection report", () => {
    ReportsPage.generateReport({
      reportType: "Fee Collection Report",
      fromDate,
      toDate,
    });
    ReportsPage.assertReportHasData();
  });

  it("TC03 - should download the report as PDF", () => {
    ReportsPage.generateReport({
      reportType: "Student List Report",
      fromDate,
      toDate,
    });
    ReportsPage.downloadAsPdf();
    cy.verifyFileDownloaded("student-list-report.pdf"); // ⚠️ PLACEHOLDER filename
  });

  it("TC04 - should download the report as Excel", () => {
    ReportsPage.generateReport({
      reportType: "Exam Result Report",
      fromDate,
      toDate,
    });
    ReportsPage.downloadAsExcel();
    cy.verifyFileDownloaded("exam-result-report.xlsx"); // ⚠️ PLACEHOLDER filename
  });

  it("TC05 - should show an empty state when no data matches the date range", () => {
    ReportsPage.generateReport({
      reportType: "Attendance Report",
      className: "Class 1",
      fromDate: "2000-01-01",
      toDate: "2000-01-02",
    });
    cy.get('[data-cy="report-empty-state"]').should("be.visible"); // ⚠️ PLACEHOLDER
  });
});
