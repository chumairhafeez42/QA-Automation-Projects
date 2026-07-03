import AttendancePage from "../../pages/AttendancePage";

describe("Module 5: Attendance Management", () => {
  const today = new Date().toISOString().split("T")[0];

  beforeEach(() => {
    cy.loginAsAdmin();
    AttendancePage.visit();
  });

  it("TC01 - should mark a student as present and submit", () => {
    const rollNo = "1001"; // ⚠️ PLACEHOLDER — existing student roll number
    AttendancePage.selectClassAndSection("Class 1", "A");
    AttendancePage.setDate(today);
    AttendancePage.markPresent(rollNo);
    AttendancePage.submitAttendance();
    cy.assertSuccessToast("Attendance submitted successfully"); // ⚠️ adjust text
  });

  it("TC02 - should mark a student as absent and verify in report", () => {
    const rollNo = "1002"; // ⚠️ PLACEHOLDER
    AttendancePage.selectClassAndSection("Class 1", "A");
    AttendancePage.setDate(today);
    AttendancePage.markAbsent(rollNo);
    AttendancePage.submitAttendance();

    AttendancePage.elements.attendanceReportTab().click();
    AttendancePage.assertAttendanceMarked(rollNo, "Absent");
  });

  it("TC03 - should not allow submitting attendance without selecting a class", () => {
    AttendancePage.setDate(today);
    AttendancePage.submitAttendance();
    cy.get('[data-cy="attendance-class-dropdown"]:invalid').should("exist");
  });

  it("TC04 - should not allow marking attendance for a future date", () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);
    const futureDateStr = futureDate.toISOString().split("T")[0];

    AttendancePage.selectClassAndSection("Class 1", "A");
    AttendancePage.setDate(futureDateStr);
    AttendancePage.submitAttendance();
    cy.get('[data-cy="toast-error"]').should("be.visible"); // ⚠️ PLACEHOLDER
  });
});
