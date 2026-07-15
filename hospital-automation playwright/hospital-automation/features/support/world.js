const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:8080';

class HmsWorld extends World {
  constructor(options) {
    super(options);
    this.baseUrl = BASE_URL;
  }

  async openBrowser() {
    this.browser = await chromium.launch({ headless: process.env.HEADLESS !== 'false' });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    if (this.browser) await this.browser.close();
  }

  testid(id) {
    return `[data-testid="${id}"]`;
  }

  async goto(path = '/') {
    await this.page.goto(this.baseUrl + path, { waitUntil: 'load' });
  }
}

setWorldConstructor(HmsWorld);
