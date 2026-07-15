const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const AdminPage = require('../pages/AdminPage');

const modulePaths = {
  'admin/users': '/admin/users',
  stocks: '/stocks',
  appointments: '/appointments'
};

Given('I am on the admin users page', async function () {
  this.adminPage = new AdminPage(this.page);
  await this.adminPage.open();
});

Given('I change the role of {string} to {string}', async function (email, role) {
  this.adminPage = this.adminPage || new AdminPage(this.page);
  await this.adminPage.changeUserRole(email, role);
});

When('I deactivate the user {string}', async function (email) {
  await this.adminPage.deactivateUser(email);
});

Given('the user {string} is deactivated', async function (email) {
  await this.adminPage.deactivateUser(email);
});

When('I activate the user {string}', async function (email) {
  await this.adminPage.activateUser(email);
});

Then('the status of {string} should be {string}', async function (email, expectedStatus) {
  const status = await this.adminPage.getUserStatus(email);
  expect(status).toContain(expectedStatus);
});

When('I try to open the admin users page', async function () {
  this.adminPage = new AdminPage(this.page);
  await this.adminPage.open();
});

When('I try to open the {string} page', async function (module) {
  const path = modulePaths[module] || `/${module}`;
  await this.page.goto(`${this.config.BASE_URL}${path}`);
});

Then('I should see the access denied message', async function () {
  this.adminPage = this.adminPage || new AdminPage(this.page);
  expect(await this.adminPage.isAccessDenied()).toBeTruthy();
});

Then('access should be {string}', async function (result) {
  if (result === 'denied') {
    const denied = await this.page.locator('[data-testid="access-denied"]').isVisible();
    expect(denied).toBeTruthy();
  } else {
    const denied = await this.page.locator('[data-testid="access-denied"]').isVisible().catch(() => false);
    expect(denied).toBeFalsy();
  }
});

Then('I should see the admin success message {string}', async function (message) {
  const success = await this.adminPage.textOf(this.adminPage.successBanner);
  expect(success).toContain(message);
});

When('I open the audit log', async function () {
  await this.adminPage.openAuditLog();
});

Then('the audit log should contain an entry for the role change', async function () {
  const count = await this.adminPage.auditLogCount();
  expect(count).toBeGreaterThan(0);
});
