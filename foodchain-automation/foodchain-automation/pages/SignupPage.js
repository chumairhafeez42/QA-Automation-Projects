const BasePage = require('./BasePage');

class SignupPage extends BasePage {
  constructor(page) {
    super(page);
    this.nameInput = '#signup-name';
    this.emailInput = '#signup-email';
    this.phoneInput = '#signup-phone';
    this.passwordInput = '#signup-password';
    this.confirmPasswordInput = '#signup-confirm-password';
    this.roleSelect = '#signup-role';
    this.termsCheckbox = '#signup-terms';
    this.submitButton = '[data-testid="signup-submit"]';
    this.successBanner = '[data-testid="signup-success"]';
    this.errorBanner = '[data-testid="signup-error"]';
  }

  async open() {
    await this.goto('/signup');
  }

  async register({ name, email, phone, password, confirmPassword, role }) {
    await this.fill(this.nameInput, name);
    await this.fill(this.emailInput, email);
    await this.fill(this.phoneInput, phone);
    await this.fill(this.passwordInput, password);
    await this.fill(this.confirmPasswordInput, confirmPassword ?? password);
    if (role) await this.select(this.roleSelect, role);
    await this.click(this.termsCheckbox);
    await this.click(this.submitButton);
  }

  async getSuccessMessage() {
    return this.textOf(this.successBanner);
  }

  async getErrorMessage() {
    return this.textOf(this.errorBanner);
  }
}

module.exports = SignupPage;
