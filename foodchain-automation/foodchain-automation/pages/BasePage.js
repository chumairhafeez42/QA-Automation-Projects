class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(`${require('../support/config').BASE_URL}${path}`);
  }

  async click(selector) {
    await this.page.locator(selector).click();
  }

  async fill(selector, value) {
    await this.page.locator(selector).fill(value);
  }

  async select(selector, value) {
    await this.page.locator(selector).selectOption(value);
  }

  async textOf(selector) {
    return (await this.page.locator(selector).textContent())?.trim();
  }

  async isVisible(selector) {
    return this.page.locator(selector).isVisible();
  }

  async waitForToast(text) {
    await this.page.getByText(text, { exact: false }).waitFor({ state: 'visible' });
  }
}

module.exports = BasePage;
