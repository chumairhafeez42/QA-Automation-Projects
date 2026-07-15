const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SignupPage = require('../pages/SignupPage');

Given('I am on the sign-up page', async function () {
  this.signupPage = new SignupPage(this.page);
  await this.signupPage.open();
});

When('I sign up with the following details:', async function (dataTable) {
  const row = dataTable.hashes()[0];
  await this.signupPage.register(row);
});

When('I sign up with mismatched passwords {string} and {string}', async function (password, confirmPassword) {
  await this.signupPage.register({
    name: 'Test User',
    email: `mismatch.${Date.now()}@mail.com`,
    phone: '9998887777',
    password,
    confirmPassword,
    role: 'customer'
  });
});

When('I sign up leaving the {string} field empty', async function (field) {
  const baseData = {
    name: 'Test User',
    email: `newuser.${Date.now()}@mail.com`,
    phone: '9998887776',
    password: 'Passw0rd!1',
    role: 'customer'
  };
  baseData[field] = '';
  await this.signupPage.register(baseData);
});

When('I sign up without accepting the terms and conditions', async function () {
  await this.signupPage.fill(this.signupPage.nameInput, 'Test User');
  await this.signupPage.fill(this.signupPage.emailInput, `noterms.${Date.now()}@mail.com`);
  await this.signupPage.fill(this.signupPage.phoneInput, '9998887775');
  await this.signupPage.fill(this.signupPage.passwordInput, 'Passw0rd!1');
  await this.signupPage.fill(this.signupPage.confirmPasswordInput, 'Passw0rd!1');
  await this.signupPage.click(this.signupPage.submitButton);
});

Then('I should see the sign-up success message {string}', async function (message) {
  const success = await this.signupPage.getSuccessMessage();
  expect(success).toContain(message);
});

Then('I should see the sign-up error {string}', async function (message) {
  const error = await this.signupPage.getErrorMessage();
  expect(error).toContain(message);
});
