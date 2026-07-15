const BasePage = require('./BasePage');

class AppointmentsPage extends BasePage {
  constructor(page) {
    super(page);
    this.newAppointmentButton = '[data-testid="new-appointment-btn"]';
    this.customerSelect = '#appointment-customer';
    this.branchSelect = '#appointment-branch';
    this.dateInput = '#appointment-date';
    this.timeInput = '#appointment-time';
    this.purposeInput = '#appointment-purpose';
    this.saveButton = '[data-testid="appointment-save"]';
    this.cancelButton = '[data-testid="appointment-cancel"]';
    this.successBanner = '[data-testid="appointment-success"]';
    this.appointmentRow = (id) => `[data-testid="appointment-row-${id}"]`;
    this.statusBadge = (id) => `[data-testid="appointment-status-${id}"]`;
    this.appointmentsList = '[data-testid="appointments-list"]';
  }

  async open() {
    await this.goto('/appointments');
  }

  async createAppointment({ customer, branch, date, time, purpose }) {
    await this.click(this.newAppointmentButton);
    await this.select(this.customerSelect, customer);
    await this.select(this.branchSelect, branch);
    await this.fill(this.dateInput, date);
    await this.fill(this.timeInput, time);
    await this.fill(this.purposeInput, purpose);
    await this.click(this.saveButton);
  }

  async cancelAppointment(id) {
    await this.click(this.appointmentRow(id));
    await this.click(this.cancelButton);
  }

  async getStatus(id) {
    return this.textOf(this.statusBadge(id));
  }

  async getSuccessMessage() {
    return this.textOf(this.successBanner);
  }

  async appointmentCount() {
    return this.page.locator(`${this.appointmentsList} [data-testid^="appointment-row-"]`).count();
  }
}

module.exports = AppointmentsPage;
