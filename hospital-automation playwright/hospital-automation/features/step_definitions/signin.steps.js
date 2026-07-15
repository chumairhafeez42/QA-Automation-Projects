const { Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Then('I should see the signin message {string}', async function (expectedText) {
  await expect(this.page.locator(this.testid('signin-message'))).toHaveText(expectedText);
});
