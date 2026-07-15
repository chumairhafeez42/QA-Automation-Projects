const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { doSignup } = require('./common.steps.js');

When('I sign up with name {string}, email {string}, password {string}, confirm password {string} and role {string}',
  async function (name, email, password, confirm, role) {
    await doSignup(this, { name, email, password, confirm, role });
  });

Then('I should see the signup message {string}', async function (expectedText) {
  await expect(this.page.locator(this.testid('signup-message'))).toHaveText(expectedText);
});
