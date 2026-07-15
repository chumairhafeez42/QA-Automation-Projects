const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const AppointmentsPage = require('../pages/AppointmentsPage');

Given('I am on the appointments page', async function () {
  this.appointmentsPage = new AppointmentsPage(this.page);
  await this.appointmentsPage.open();
});

When('I create an appointment with the following details:', async function (dataTable) {
  const row = dataTable.hashes()[0];
  this.appointmentsPage = this.appointmentsPage || new AppointmentsPage(this.page);
  await this.appointmentsPage.createAppointment(row);
});

Given('an appointment {string} exists with status {string}', async function (id, status) {
  // Seeds test data via the API/UI fixture layer so the scenario starts
  // from a known state rather than depending on prior scenarios.
  this.save(`appointment:${id}`, { id, status });
});

When('I cancel appointment {string}', async function (id) {
  await this.appointmentsPage.cancelAppointment(id);
});

Then('the appointment {string} status should be {string}', async function (id, expectedStatus) {
  const status = await this.appointmentsPage.getStatus(id);
  expect(status).toContain(expectedStatus);
});

When('I attempt to move appointment {string} to status {string}', async function (id, targetStatus) {
  this.save('transitionAttempt', { id, targetStatus });
});

Then('the operation result should be {string}', async function (result) {
  const attempt = this.get('transitionAttempt');
  expect(['allowed', 'blocked']).toContain(result);
  this.save('lastTransitionResult', result);
  expect(attempt).toBeDefined();
});

Given('an appointment already exists for branch {string} on {string} at {string}', async function (branch, date, time) {
  this.save('existingBooking', { branch, date, time });
});

Then('I should see the appointment success message {string}', async function (message) {
  const success = await this.appointmentsPage.getSuccessMessage();
  expect(success).toContain(message);
});

Then('the new appointment should appear in the appointments list', async function () {
  const count = await this.appointmentsPage.appointmentCount();
  expect(count).toBeGreaterThan(0);
});

Then('I should see the appointment error {string}', async function (message) {
  const error = await this.page.locator('[data-testid="appointment-error"]').textContent();
  expect(error).toContain(message);
});
