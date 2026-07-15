const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

Given('I am on the sign-in page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

Given('I sign in with the {string} account', async function (roleKey) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
  const user = this.config.users[roleKey];
  await this.loginPage.login(user.email, user.password);
  this.save('currentRole', roleKey);
});

When('I attempt to sign in with email {string} and password {string}', async function (email, password) {
  await this.loginPage.login(email, password);
});

When('I click the sign-in submit button without entering any details', async function () {
  await this.page.locator(this.loginPage.submitButton).click();
});

Then('I should be redirected to the dashboard', async function () {
  expect(await this.loginPage.isLoggedIn()).toBeTruthy();
});

Then('I should see my role as {string}', async function (roleLabel) {
  const heading = await this.loginPage.textOf(this.loginPage.dashboardHeading);
  expect(heading).toContain(roleLabel);
});

Then('I should see the sign-in error {string}', async function (message) {
  const error = await this.loginPage.getErrorMessage();
  expect(error).toContain(message);
});

Then('I should remain on the sign-in page', async function () {
  expect(this.page.url()).toContain('/signin');
});

When('I log out', async function () {
  await this.loginPage.logout();
});

Then('I should be redirected to the sign-in page', async function () {
  expect(this.page.url()).toContain('/signin');
});
