import TeacherPage from "../../pages/TeacherPage";
import { generateTeacher } from "../../support/dataGenerator";

describe("Module 3: Teacher / Staff Management", () => {
  let teacher;

  beforeEach(() => {
    cy.loginAsAdmin();
    teacher = generateTeacher();
    TeacherPage.visit();
  });

  it("TC01 - should add a new teacher successfully", () => {
    TeacherPage.openAddTeacherForm();
    TeacherPage.fillTeacherForm(teacher);
    TeacherPage.save();
    cy.assertSuccessToast("Teacher added successfully"); // ⚠️ adjust text
  });

  it("TC02 - should search for a teacher by name", () => {
    TeacherPage.openAddTeacherForm();
    TeacherPage.fillTeacherForm(teacher);
    TeacherPage.save();

    TeacherPage.searchTeacher(teacher.lastName);
    cy.get('[data-cy="data-table"]').should("contain.text", teacher.lastName);
  });

  it("TC03 - should delete a teacher record", () => {
    const teacherId = "T001"; // ⚠️ PLACEHOLDER
    TeacherPage.deleteTeacher(teacherId);
    cy.assertSuccessToast("Teacher deleted successfully"); // ⚠️ adjust text
  });

  it("TC04 - should reject an invalid email format", () => {
    TeacherPage.openAddTeacherForm();
    TeacherPage.fillTeacherForm({ ...teacher, email: "not-an-email" });
    TeacherPage.save();
    cy.get('[data-cy="teacher-email"]:invalid').should("exist");
  });
});
