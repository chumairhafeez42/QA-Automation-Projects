class ClassManagementPage {
  elements = {
    addClassButton: () => cy.get('[data-cy="add-class-btn"]'),
    classNameInput: () => cy.get('[data-cy="class-name-input"]'),
    sectionNameInput: () => cy.get('[data-cy="section-name-input"]'),
    classTeacherDropdown: () => cy.get('[data-cy="class-teacher-dropdown"]'),
    capacityInput: () => cy.get('[data-cy="class-capacity-input"]'),
    saveButton: () => cy.get('[data-cy="save-class-btn"]'),
    classRow: (className) => cy.get(`[data-cy="class-row-${className}"]`),
    editButton: (className) => cy.get(`[data-cy="edit-class-${className}"]`),
    deleteButton: (className) => cy.get(`[data-cy="delete-class-${className}"]`),
    confirmDeleteButton: () => cy.get('[data-cy="confirm-delete-btn"]'),
  };

  visit() {
    cy.visit("/classes"); // ⚠️ PLACEHOLDER route
    return this;
  }

  openAddClassForm() {
    this.elements.addClassButton().click();
    return this;
  }

  fillClassForm(classData) {
    this.elements.classNameInput().type(classData.className);
    this.elements.sectionNameInput().type(classData.section);
    this.elements.classTeacherDropdown().select(classData.teacher);
    this.elements.capacityInput().type(classData.capacity);
    return this;
  }

  save() {
    this.elements.saveButton().click();
    return this;
  }

  assertClassExists(className) {
    this.elements.classRow(className).should("be.visible");
    return this;
  }

  deleteClass(className) {
    this.elements.deleteButton(className).click();
    this.elements.confirmDeleteButton().click();
    return this;
  }
}

export default new ClassManagementPage();
