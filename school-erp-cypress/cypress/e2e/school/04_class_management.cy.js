import ClassManagementPage from "../../pages/ClassManagementPage";
import { generateClass } from "../../support/dataGenerator";

describe("Module 4: Class / Section Management", () => {
  let classData;

  beforeEach(() => {
    cy.loginAsAdmin();
    classData = generateClass();
    ClassManagementPage.visit();
  });

  it("TC01 - should create a new class with a section", () => {
    ClassManagementPage.openAddClassForm();
    ClassManagementPage.fillClassForm(classData);
    ClassManagementPage.save();
    cy.assertSuccessToast("Class created successfully"); // ⚠️ adjust text
    ClassManagementPage.assertClassExists(classData.className);
  });

  it("TC02 - should not allow duplicate class+section combination", () => {
    ClassManagementPage.openAddClassForm();
    ClassManagementPage.fillClassForm(classData);
    ClassManagementPage.save();

    // Attempt to create the exact same class again
    ClassManagementPage.openAddClassForm();
    ClassManagementPage.fillClassForm(classData);
    ClassManagementPage.save();
    cy.get('[data-cy="toast-error"]').should("be.visible"); // ⚠️ PLACEHOLDER selector
  });

  it("TC03 - should delete a class", () => {
    ClassManagementPage.openAddClassForm();
    ClassManagementPage.fillClassForm(classData);
    ClassManagementPage.save();

    ClassManagementPage.deleteClass(classData.className);
    cy.assertSuccessToast("Class deleted successfully"); // ⚠️ adjust text
  });
});
