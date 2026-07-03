class AttendancePage {
  elements = {
    classDropdown: () => cy.get('[data-cy="attendance-class-dropdown"]'),
    sectionDropdown: () => cy.get('[data-cy="attendance-section-dropdown"]'),
    dateInput: () => cy.get('[data-cy="attendance-date-input"]'),
    loadStudentsButton: () => cy.get('[data-cy="load-students-btn"]'),
    presentRadio: (rollNo) => cy.get(`[data-cy="present-${rollNo}"]`),
    absentRadio: (rollNo) => cy.get(`[data-cy="absent-${rollNo}"]`),
    lateRadio: (rollNo) => cy.get(`[data-cy="late-${rollNo}"]`),
    submitButton: () => cy.get('[data-cy="submit-attendance-btn"]'),
    attendanceReportTab: () => cy.get('[data-cy="attendance-report-tab"]'),
    reportRow: (rollNo) => cy.get(`[data-cy="attendance-report-row-${rollNo}"]`),
  };

  visit() {
    cy.visit("/attendance"); // ⚠️ PLACEHOLDER route
    return this;
  }

  selectClassAndSection(className, section) {
    this.elements.classDropdown().select(className);
    this.elements.sectionDropdown().select(section);
    this.elements.loadStudentsButton().click();
    cy.waitForTableLoad();
    return this;
  }

  setDate(date) {
    this.elements.dateInput().type(date);
    return this;
  }

  markPresent(rollNo) {
    this.elements.presentRadio(rollNo).check({ force: true });
    return this;
  }

  markAbsent(rollNo) {
    this.elements.absentRadio(rollNo).check({ force: true });
    return this;
  }

  submitAttendance() {
    this.elements.submitButton().click();
    return this;
  }

  assertAttendanceMarked(rollNo, status) {
    this.elements.reportRow(rollNo).should("contain.text", status);
    return this;
  }
}

export default new AttendancePage();
