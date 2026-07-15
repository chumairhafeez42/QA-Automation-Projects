const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const StocksPage = require('../pages/StocksPage');

Given('I am on the stocks page', async function () {
  this.stocksPage = new StocksPage(this.page);
  await this.stocksPage.open();
});

When('I add a stock item with the following details:', async function (dataTable) {
  const row = dataTable.hashes()[0];
  await this.stocksPage.addStock(row);
});

Given('the stock item {string} currently has a quantity of {string} kg', async function (item, quantity) {
  this.save(`stock:${item}`, { item, quantity });
});

Given('the stock item {string} has a reorder level of {string} liters', async function (item, reorderLevel) {
  this.save(`stock:${item}`, { item, reorderLevel });
});

Given('the stock item {string} exists', async function (item) {
  this.save(`stock:${item}`, { item });
});

When('I update the quantity of {string} to {string}', async function (item, quantity) {
  await this.stocksPage.updateQuantity(item, quantity);
});

When('I delete the stock item {string}', async function (item) {
  await this.stocksPage.deleteStock(item);
});

When('I add a stock item leaving the {string} field empty', async function (field) {
  const baseData = {
    item: 'Sample Item',
    category: 'Vegetables',
    quantity: 10,
    unit: 'kg',
    reorderLevel: 5,
    branch: 'Downtown'
  };
  baseData[field] = '';
  await this.stocksPage.addStock(baseData);
});

Then('the quantity of {string} should be {string}', async function (item, expectedQuantity) {
  const quantity = await this.stocksPage.getQuantity(item);
  expect(quantity).toContain(expectedQuantity);
});

Then('{string} should be flagged as low stock', async function (item) {
  expect(await this.stocksPage.isLowStockFlagged(item)).toBeTruthy();
});

Then('{string} should no longer appear in the stock list', async function (item) {
  const visible = await this.page.locator(this.stocksPage.stockRow(item)).isVisible().catch(() => false);
  expect(visible).toBeFalsy();
});

Then('I should see the stock success message {string}', async function (message) {
  const success = await this.stocksPage.getSuccessMessage();
  expect(success).toContain(message);
});

Then('I should see the stock error {string}', async function (message) {
  const error = await this.page.locator('[data-testid="stock-error"]').textContent();
  expect(error).toContain(message);
});
