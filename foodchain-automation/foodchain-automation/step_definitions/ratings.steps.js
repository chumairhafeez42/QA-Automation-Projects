const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const RatingsPage = require('../pages/RatingsPage');

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

Given('I am on the ratings page', async function () {
  this.ratingsPage = new RatingsPage(this.page);
  await this.ratingsPage.open();
});

When('I rate the food {string} with {int} stars and review {string}', async function (food, stars, review) {
  await this.ratingsPage.rateFood({ food, stars, review });
});

When('I rate the food {string} with {int} stars and no review', async function (food, stars) {
  await this.ratingsPage.rateFood({ food, stars });
});

When('I attempt to rate the food {string} with an invalid star value {string}', async function (food, stars) {
  this.save('invalidStarAttempt', { food, stars });
  // The UI does not expose a star element outside 1-5, so this simulates
  // a direct API/DOM-level submission for boundary validation.
  await this.page.evaluate(
    ({ food, stars }) => window.__testHooks?.submitRating?.(food, Number(stars)),
    { food, stars }
  );
});

Given('I have already rated the food {string} for my last order', async function (food) {
  this.save('previouslyRated', food);
});

Given('the food {string} has an average rating of {string} from {int} reviews', async function (food, avg, count) {
  this.save('foodBaseline', { food, avg, count });
});

Then('I should see the rating success message {string}', async function (message) {
  const success = await this.ratingsPage.getSuccessMessage();
  expect(success).toContain(message);
});

Then('I should see the rating error {string}', async function (message) {
  const error = await this.page.locator('[data-testid="rating-error"]').textContent();
  expect(error).toContain(message);
});

Then('the average rating for food {string} should update', async function (foodId) {
  const avg = await this.ratingsPage.getAverageRating(foodId);
  expect(avg).toBeTruthy();
});
