const BasePage = require('./BasePage');

class RatingsPage extends BasePage {
  constructor(page) {
    super(page);
    this.foodSearchInput = '#rating-food-search';
    this.foodOption = (name) => `[data-testid="food-option-${name}"]`;
    this.starRating = (stars) => `[data-testid="star-${stars}"]`;
    this.reviewTextarea = '#rating-review';
    this.submitButton = '[data-testid="rating-submit"]';
    this.successBanner = '[data-testid="rating-success"]';
    this.averageRatingLabel = (foodId) => `[data-testid="avg-rating-${foodId}"]`;
    this.reviewList = (foodId) => `[data-testid="reviews-${foodId}"] .review-item`;
  }

  async open() {
    await this.goto('/ratings');
  }

  async rateFood({ food, stars, review }) {
    await this.fill(this.foodSearchInput, food);
    await this.click(this.foodOption(food));
    await this.click(this.starRating(stars));
    if (review) await this.fill(this.reviewTextarea, review);
    await this.click(this.submitButton);
  }

  async getSuccessMessage() {
    return this.textOf(this.successBanner);
  }

  async getAverageRating(foodId) {
    return this.textOf(this.averageRatingLabel(foodId));
  }

  async getReviewCount(foodId) {
    return this.page.locator(this.reviewList(foodId)).count();
  }
}

module.exports = RatingsPage;
