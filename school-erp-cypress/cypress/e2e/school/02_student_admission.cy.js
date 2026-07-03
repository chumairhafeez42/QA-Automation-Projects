import StudentAdmissionPage from "../../pages/StudentAdmissionPage";
import { generateStudent } from "../../support/dataGenerator";

describe("Module 2: Student Admission (CRUD)", () => {
  let student;

  beforeEach(() => {
    cy.loginAsAdmin();
    student = generateStudent();
    StudentAdmissionPage.visit();
  });

  it("TC01 - should add a new student successfully", () => {
    StudentAdmissionPage.openAddStudentForm();
    StudentAdmissionPage.fillStudentForm(student);
    StudentAdmissionPage.save();
    cy.assertSuccessToast("Student added successfully"); // ⚠️ adjust text
  });

  it("TC02 - should find the newly added student via search", () => {
    StudentAdmissionPage.openAddStudentForm();
    StudentAdmissionPage.fillStudentForm(student);
    StudentAdmissionPage.save();

    StudentAdmissionPage.searchStudent(student.firstName);
    cy.get('[data-cy="data-table"]').should("contain.text", student.firstName);
  });

  it("TC03 - should edit an existing student's details", () => {
    const rollNo = "1001"; // ⚠️ PLACEHOLDER — use a known/created roll number
    StudentAdmissionPage.editStudent(rollNo);
    cy.get('[data-cy="student-first-name"]').clear().type("UpdatedName");
    StudentAdmissionPage.save();
    cy.assertSuccessToast("Student updated successfully"); // ⚠️ adjust text
  });

  it("TC04 - should delete a student", () => {
    const rollNo = "1001"; // ⚠️ PLACEHOLDER
    StudentAdmissionPage.deleteStudent(rollNo);
    cy.assertSuccessToast("Student deleted successfully"); // ⚠️ adjust text
    StudentAdmissionPage.assertStudentDeleted(rollNo);
  });

  it("TC05 - should show validation errors when required fields are missing", () => {
    StudentAdmissionPage.openAddStudentForm();
    StudentAdmissionPage.save(); // submit empty form
    cy.get('[data-cy="student-first-name"]').should("have.attr", "required");
  });
});
