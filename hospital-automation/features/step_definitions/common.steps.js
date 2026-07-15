const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

// ---------- Shared helpers ----------
async function doSignup(world, { name, email, password, confirm, role }) {
  const p = world.page;
  await p.fill(world.testid('signup-name'), name || '');
  await p.fill(world.testid('signup-email'), email || '');
  await p.fill(world.testid('signup-password'), password || '');
  await p.fill(world.testid('signup-confirm'), confirm || '');
  if (role) await p.selectOption(world.testid('signup-role'), role);
  await p.click(world.testid('signup-submit'));
}

async function doSignin(world, email, password) {
  const p = world.page;
  await p.fill(world.testid('signin-email'), email || '');
  await p.fill(world.testid('signin-password'), password || '');
  await p.click(world.testid('signin-submit'));
}

module.exports = { doSignup, doSignin };

// ---------- Background / setup steps ----------
Given('the hospital management system database is reset', async function () {
  // Actual reset happens in the Before hook; this step documents intent in the scenario.
  await this.page.evaluate(() => window.__resetDB && window.__resetDB());
  await this.page.reload();
});

Given('I am on the signup page', async function () {
  await this.page.click(this.testid('go-to-signup')).catch(() => {});
  const visible = await this.page.isVisible('#view-signup');
  if (!visible) {
    await this.page.evaluate(() => {
      document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
      document.getElementById('view-signup').style.display = 'block';
    });
  }
});

Given('I am on the signin page', async function () {
  await this.page.evaluate(() => {
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    document.getElementById('view-signin').style.display = 'block';
  });
});

Given('I am on the appointments page', async function () {
  await this.page.click(this.testid('nav-appointments'));
});

Given('I am on the doctors page', async function () {
  const navVisible = await this.page.isVisible(this.testid('nav-doctors'));
  if (navVisible) {
    // Signed-in user: use the real nav button so app.js renders the doctor list.
    await this.page.click(this.testid('nav-doctors'));
  } else {
    // Anonymous visitor: nav is hidden, so drive the same render path directly.
    await this.page.evaluate(() => {
      document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
      document.getElementById('view-doctors').style.display = 'block';
      if (typeof renderDoctors === 'function') renderDoctors();
    });
  }
});

Given('a user already exists with email {string} and password {string}', async function (email, password) {
  await this.goto('/');
  await doSignup(this, { name: 'Seed User', email, password, confirm: password, role: 'patient' });
});

Given('I have signed in as {string} with password {string}', async function (email, password) {
  await this.goto('/');
  await doSignin(this, email, password);
});

When('I sign in with email {string} and password {string}', async function (email, password) {
  await doSignin(this, email, password);
});

When('I navigate to the admin panel', async function () {
  await this.page.click(this.testid('nav-admin'));
});

When('I navigate to the medicine stock page', async function () {
  await this.page.click(this.testid('nav-medicine'));
});

When('I log out', async function () {
  await this.page.click(this.testid('logout-btn'));
});

Then('I should be redirected to the appointments page', async function () {
  await expect(this.page.locator('#view-appointments')).toBeVisible();
});

Then('I should be redirected to the signin page', async function () {
  await expect(this.page.locator('#view-signin')).toBeVisible();
});

Then('the navbar should show the admin panel link', async function () {
  await expect(this.page.locator(this.testid('nav-admin'))).toBeVisible();
});

Then('the navbar should not show the admin panel link', async function () {
  await expect(this.page.locator(this.testid('nav-admin'))).toBeHidden();
});

Then('the navbar should not show the medicine stock link', async function () {
  await expect(this.page.locator(this.testid('nav-medicine'))).toBeHidden();
});
