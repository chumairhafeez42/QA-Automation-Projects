class TeacherPage {
  elements = {
    addTeacherButton: () => cy.get('[data-cy="add-teacher-btn"]'),
    firstNameInput: () => cy.get('[data-cy="teacher-first-name"]'),
    lastNameInput: () => cy.get('[data-cy="teacher-last-name"]'),
    emailInput: () => cy.get('[data-cy="teacher-email"]'),
    phoneInput: () => cy.get('[data-cy="teacher-phone"]'),
    subjectDropdown: () => cy.get('[data-cy="teacher-subject"]'),
    qualificationInput: () => cy.get('[data-cy="teacher-qualification"]'),
    joiningDateInput: () => cy.get('[data-cy="teacher-joining-date"]'),
    saveButton: () => cy.get('[data-cy="save-teacher-btn"]'),
    searchInput: () => cy.get('[data-cy="teacher-search"]'),
    teacherRow: (id) => cy.get(`[data-cy="teacher-row-${id}"]`),
    editButton: (id) => cy.get(`[data-cy="edit-teacher-${id}"]`),
    deleteButton: (id) => cy.get(`[data-cy="delete-teacher-${id}"]`),
    confirmDeleteButton: () => cy.get('[data-cy="confirm-delete-btn"]'),
  };

  visit() {
    cy.visit("/teachers"); // ⚠️ PLACEHOLDER route
    return this;
  }

  openAddTeacherForm() {
    this.elements.addTeacherButton().click();
    return this;
  }

  fillTeacherForm(teacher) {
    this.elements.firstNameInput().type(teacher.firstName);
    this.elements.lastNameInput().type(teacher.lastName);
    this.elements.emailInput().type(teacher.email);
    this.elements.phoneInput().type(teacher.phone);
    this.elements.subjectDropdown().select(teacher.subject);
    this.elements.qualificationInput().type(teacher.qualification);
    this.elements.joiningDateInput().type(teacher.joiningDate);
    return this;
  }

  save() {
    this.elements.saveButton().click();
    return this;
  }

  searchTeacher(query) {
    this.elements.searchInput().clear().type(query);
    cy.waitForTableLoad();
    return this;
  }

  deleteTeacher(id) {
    this.elements.deleteButton(id).click();
    this.elements.confirmDeleteButton().click();
    return this;
  }

  assertTeacherExists(id) {
    this.elements.teacherRow(id).should("be.visible");
    return this;
  }
}

export default new TeacherPage();
