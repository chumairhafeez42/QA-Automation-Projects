const BasePage = require('./BasePage');

class AdminPage extends BasePage {
  constructor(page) {
    super(page);
    this.userSearchInput = '#admin-user-search';
    this.userRow = (email) => `[data-testid="user-row-${email}"]`;
    this.roleSelect = (email) => `[data-testid="user-role-select-${email}"]`;
    this.saveRoleButton = (email) => `[data-testid="user-role-save-${email}"]`;
    this.deactivateButton = (email) => `[data-testid="user-deactivate-${email}"]`;
    this.activateButton = (email) => `[data-testid="user-activate-${email}"]`;
    this.statusBadge = (email) => `[data-testid="user-status-${email}"]`;
    this.accessDeniedBanner = '[data-testid="access-denied"]';
    this.successBanner = '[data-testid="admin-success"]';
    this.auditLogTab = '[data-testid="audit-log-tab"]';
    this.auditLogEntries = '[data-testid="audit-log-entries"] .log-item';
  }

  async open() {
    await this.goto('/admin/users');
  }

  async changeUserRole(email, role) {
    await this.fill(this.userSearchInput, email);
    await this.select(this.roleSelect(email), role);
    await this.click(this.saveRoleButton(email));
  }

  async deactivateUser(email) {
    await this.click(this.deactivateButton(email));
  }

  async activateUser(email) {
    await this.click(this.activateButton(email));
  }

  async getUserStatus(email) {
    return this.textOf(this.statusBadge(email));
  }

  async isAccessDenied() {
    return this.isVisible(this.accessDeniedBanner);
  }

  async openAuditLog() {
    await this.click(this.auditLogTab);
  }

  async auditLogCount() {
    return this.page.locator(this.auditLogEntries).count();
  }
}

module.exports = AdminPage;
