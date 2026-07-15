const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(30 * 1000);

Before(async function () {
  await this.openBrowser();
  // Load the app once so localStorage/window is available, then hard reset the demo DB.
  await this.goto('/');
  await this.page.evaluate(() => window.__resetDB && window.__resetDB());
  await this.page.reload();
});

After(async function () {
  await this.closeBrowser();
});
