class StudentAdmissionPage {
  elements = {
    addStudentButton: () => cy.get('[data-cy="add-student-btn"]'), // ⚠️ PLACEHOLDER
    firstNameInput: () => cy.get('[data-cy="student-first-name"]'),
    lastNameInput: () => cy.get('[data-cy="student-last-name"]'),
    dobInput: () => cy.get('[data-cy="student-dob"]'),
    genderDropdown: () => cy.get('[data-cy="student-gender"]'),
    classDropdown: () => cy.get('[data-cy="student-class"]'),
    sectionDropdown: () => cy.get('[data-cy="student-section"]'),
    guardianNameInput: () => cy.get('[data-cy="guardian-name"]'),
    guardianPhoneInput: () => cy.get('[data-cy="guardian-phone"]'),
    emailInput: () => cy.get('[data-cy="student-email"]'),
    addressInput: () => cy.get('[data-cy="student-address"]'),
    saveButton: () => cy.get('[data-cy="save-student-btn"]'),
    searchInput: () => cy.get('[data-cy="student-search"]'),
    studentRow: (rollNo) => cy.get(`[data-cy="student-row-${rollNo}"]`),
    editButton: (rollNo) => cy.get(`[data-cy="edit-student-${rollNo}"]`),
    deleteButton: (rollNo) => cy.get(`[data-cy="delete-student-${rollNo}"]`),
    confirmDeleteButton: () => cy.get('[data-cy="confirm-delete-btn"]'),
  };

  visit() {
    cy.visit("/students"); // ⚠️ PLACEHOLDER route
    return this;
  }

  openAddStudentForm() {
    this.elements.addStudentButton().click();
    return this;
  }

  fillStudentForm(student) {
    this.elements.firstNameInput().type(student.firstName);
    this.elements.lastNameInput().type(student.lastName);
    this.elements.dobInput().type(student.dob);
    this.elements.genderDropdown().select(student.gender);
    this.elements.classDropdown().select(student.className);
    this.elements.sectionDropdown().select(student.section);
    this.elements.guardianNameInput().type(student.guardianName);
    this.elements.guardianPhoneInput().type(student.guardianPhone);
    this.elements.emailInput().type(student.email);
    this.elements.addressInput().type(student.address);
    return this;
  }

  save() {
    this.elements.saveButton().click();
    return this;
  }

  searchStudent(query) {
    this.elements.searchInput().clear().type(query);
    cy.waitForTableLoad();
    return this;
  }

  editStudent(rollNo) {
    this.elements.editButton(rollNo).click();
    return this;
  }

  deleteStudent(rollNo) {
    this.elements.deleteButton(rollNo).click();
    this.elements.confirmDeleteButton().click();
    return this;
  }

  assertStudentExists(rollNo) {
    this.elements.studentRow(rollNo).should("be.visible");
    return this;
  }

  assertStudentDeleted(rollNo) {
    this.elements.studentRow(rollNo).should("not.exist");
    return this;
  }
}

export default new StudentAdmissionPage();
