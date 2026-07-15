const BasePage = require('./BasePage');

class StocksPage extends BasePage {
  constructor(page) {
    super(page);
    this.addStockButton = '[data-testid="add-stock-btn"]';
    this.itemNameInput = '#stock-item-name';
    this.categorySelect = '#stock-category';
    this.quantityInput = '#stock-quantity';
    this.unitSelect = '#stock-unit';
    this.reorderLevelInput = '#stock-reorder-level';
    this.branchSelect = '#stock-branch';
    this.saveButton = '[data-testid="stock-save"]';
    this.successBanner = '[data-testid="stock-success"]';
    this.stockRow = (item) => `[data-testid="stock-row-${item}"]`;
    this.quantityCell = (item) => `[data-testid="stock-qty-${item}"]`;
    this.lowStockBadge = (item) => `[data-testid="low-stock-${item}"]`;
    this.editButton = (item) => `[data-testid="stock-edit-${item}"]`;
    this.deleteButton = (item) => `[data-testid="stock-delete-${item}"]`;
    this.confirmDeleteButton = '[data-testid="confirm-delete"]';
  }

  async open() {
    await this.goto('/stocks');
  }

  async addStock({ item, category, quantity, unit, reorderLevel, branch }) {
    await this.click(this.addStockButton);
    await this.fill(this.itemNameInput, item);
    await this.select(this.categorySelect, category);
    await this.fill(this.quantityInput, String(quantity));
    await this.select(this.unitSelect, unit);
    await this.fill(this.reorderLevelInput, String(reorderLevel));
    await this.select(this.branchSelect, branch);
    await this.click(this.saveButton);
  }

  async updateQuantity(item, newQuantity) {
    await this.click(this.editButton(item));
    await this.fill(this.quantityInput, String(newQuantity));
    await this.click(this.saveButton);
  }

  async deleteStock(item) {
    await this.click(this.deleteButton(item));
    await this.click(this.confirmDeleteButton);
  }

  async getQuantity(item) {
    return this.textOf(this.quantityCell(item));
  }

  async isLowStockFlagged(item) {
    return this.isVisible(this.lowStockBadge(item));
  }

  async getSuccessMessage() {
    return this.textOf(this.successBanner);
  }
}

module.exports = StocksPage;
