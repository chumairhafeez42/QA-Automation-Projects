const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

async function findDoctorIdByName(world, doctorName) {
  return world.page.evaluate((name) => {
    const doc = window.__hmsDb ? window.__hmsDb.doctors.find(d => d.name === name) : null;
    if (doc) return doc.id;
    // Fallback: read straight from localStorage-backed db via app.js global `db`
    return (typeof db !== 'undefined') ? db.doctors.find(d => d.name === name).id : null;
  }, doctorName);
}

When('I rate doctor {string} with {string} stars', async function (doctorName, stars) {
  const docId = await findDoctorIdByName(this, doctorName);
  const select = this.testid(`rate-select-${docId}`);
  const button = this.testid(`rate-submit-${docId}`);
  await this.page.selectOption(select, stars);
  await this.page.click(button);
});

Then('the average rating for {string} should be {string}', async function (doctorName, expectedAverage) {
  const docId = await findDoctorIdByName(this, doctorName);
  await expect(this.page.locator(this.testid(`avg-rating-${docId}`))).toHaveText(expectedAverage);
});
