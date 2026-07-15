const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = '#login-email';
    this.passwordInput = '#login-password';
    this.submitButton = '[data-testid="signin-submit"]';
    this.errorBanner = '[data-testid="signin-error"]';
    this.forgotPasswordLink = 'text=Forgot Password';
    this.logoutButton = '[data-testid="logout-btn"]';
    this.dashboardHeading = '[data-testid="dashboard-heading"]';
  }

  async open() {
    await this.goto('/signin');
  }

  async login(email, password) {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.submitButton);
  }

  async getErrorMessage() {
    return this.textOf(this.errorBanner);
  }

  async isLoggedIn() {
    return this.isVisible(this.dashboardHeading);
  }

  async logout() {
    await this.click(this.logoutButton);
  }
}

module.exports = LoginPage;
