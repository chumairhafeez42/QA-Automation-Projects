const { Before, After, BeforeAll, AfterAll, Status } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');
const fs = require('fs');
const path = require('path');
const config = require('./config');

let browserServer;

const browserTypes = { chromium, firefox, webkit };

BeforeAll(async function () {
  const type = browserTypes[config.BROWSER] || chromium;
  browserServer = await type.launch({
    headless: config.HEADLESS,
    slowMo: config.SLOW_MO
  });
});

Before(async function () {
  this.browser = browserServer;
  this.context = await this.browser.newContext({
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true
  });
  this.context.setDefaultTimeout(config.DEFAULT_TIMEOUT);
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const dir = path.join(process.cwd(), 'reports', 'screenshots');
    fs.mkdirSync(dir, { recursive: true });
    const safeName = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_');
    const filePath = path.join(dir, `${safeName}-${Date.now()}.png`);
    const screenshot = await this.page.screenshot({ path: filePath, fullPage: true });
    await this.attach(screenshot, 'image/png');
  }
  if (this.context) await this.context.close();
});

AfterAll(async function () {
  if (browserServer) await browserServer.close();
});
