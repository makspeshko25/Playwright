import BasePage from "./basePage";

export default class SettingsPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      deleteAccountButton: this.page.locator('button.btn.btn-danger-bg', { hasText: 'Remove my account' }),
      confirmDeleteButton: this.page.locator('button.btn.btn-danger', { hasText: 'Remove' }),
      errorMessage: this.page.locator('p[_ngcontent-yuh-c47=""]:has-text("Passwords do not match")'),
    };
  }
  async deleteUserAccount() {
    await this.click(this.selectors.deleteAccountButton);
    await this.page.waitForTimeout(3000); // waits 3 seconds
    await this.click(this.selectors.confirmDeleteButton);
  }
}