const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('I add a new doctor named {string} with specialization {string}', async function (name, spec) {
  await this.page.fill(this.testid('doctor-name'), name);
  await this.page.fill(this.testid('doctor-spec'), spec);
  await this.page.click(this.testid('doctor-submit'));
});

Then('I should see the admin access denied message {string}', async function (expectedText) {
  await expect(this.page.locator(this.testid('admin-denied'))).toBeVisible();
  await expect(this.page.locator(this.testid('admin-denied'))).toHaveText(expectedText);
});

Then('I should see the admin message {string}', async function (expectedText) {
  await expect(this.page.locator(this.testid('admin-message'))).toHaveText(expectedText);
});

Then('the user table should contain a row for email {string} with role {string}', async function (email, role) {
  const row = this.page.locator(this.testid('user-list') + ' tr', { hasText: email });
  await expect(row).toContainText(role);
});

Then('the all-appointments table should contain a row for patient {string} and doctor {string}', async function (patientEmail, doctorName) {
  const row = this.page.locator(this.testid('all-appointment-list') + ' tr', { hasText: patientEmail });
  await expect(row).toContainText(doctorName);
});

Then('the doctors page should list a doctor named {string}', async function (doctorName) {
  await this.page.click(this.testid('nav-doctors'));
  await expect(this.page.locator('#doctorList')).toContainText(doctorName);
});
