const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('I add or update medicine {string} with stock {string} and price {string}', async function (name, stock, price) {
  await this.page.fill(this.testid('medicine-name'), name);
  await this.page.fill(this.testid('medicine-stock'), stock);
  await this.page.fill(this.testid('medicine-price'), price);
  await this.page.click(this.testid('medicine-submit'));
});

Then('I should see the medicine message {string}', async function (expectedText) {
  await expect(this.page.locator(this.testid('medicine-message'))).toHaveText(expectedText);
});

Then('the medicine table should contain a row for {string} with stock {string}', async function (name, stock) {
  const row = this.page.locator(this.testid('medicine-list') + ' tr', { hasText: name });
  await expect(row).toContainText(stock);
});

Then('the stock status for {string} should be {string}', async function (name, status) {
  const row = this.page.locator(this.testid('medicine-list') + ' tr', { hasText: name });
  await expect(row).toContainText(status);
});
