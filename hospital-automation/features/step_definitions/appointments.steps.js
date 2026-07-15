const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

async function selectDoctorByName(world, doctorName) {
  const options = await world.page.locator(`${world.testid('appointment-doctor')} option`).allTextContents();
  const match = options.find(o => o.startsWith(doctorName));
  await world.page.selectOption(world.testid('appointment-doctor'), { label: match });
}

Given('I have booked an appointment with doctor {string} on {string} at {string}', async function (doctorName, date, time) {
  await this.page.click(this.testid('nav-appointments'));
  await selectDoctorByName(this, doctorName);
  await this.page.fill(this.testid('appointment-date'), date);
  await this.page.fill(this.testid('appointment-time'), time);
  await this.page.click(this.testid('appointment-submit'));
});

When('I book an appointment with doctor {string} on {string} at {string}', async function (doctorName, date, time) {
  await this.page.click(this.testid('nav-appointments'));
  await selectDoctorByName(this, doctorName);
  await this.page.fill(this.testid('appointment-date'), date);
  await this.page.fill(this.testid('appointment-time'), time);
  await this.page.click(this.testid('appointment-submit'));
});

When('I attempt to book an appointment with doctor {string} without selecting a date or time', async function (doctorName) {
  await this.page.click(this.testid('nav-appointments'));
  await selectDoctorByName(this, doctorName);
  await this.page.click(this.testid('appointment-submit'));
});

When('I view my appointments', async function () {
  await this.page.click(this.testid('nav-appointments'));
});

When('I cancel the appointment with doctor {string} on {string}', async function (doctorName, date) {
  await this.page.click(this.testid('nav-appointments'));
  const row = this.page.locator('tr', { hasText: doctorName }).filter({ hasText: date });
  await row.locator('button[data-testid^="cancel-"]').click();
});

Then('I should see the appointment message {string}', async function (expectedText) {
  await expect(this.page.locator(this.testid('appointment-message'))).toHaveText(expectedText);
});

Then('the appointment list should contain a row for doctor {string} on {string} with status {string}',
  async function (doctorName, date, status) {
    const row = this.page.locator(this.testid('appointment-list') + ' tr', { hasText: doctorName }).filter({ hasText: date });
    await expect(row).toContainText(status);
  });
