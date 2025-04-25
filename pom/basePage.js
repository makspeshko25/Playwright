export default class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     * @param {string} url
     */
    constructor (page, url) {
        this.page=page;
        this.url=url;
    }
    // Navigation
    async openPage(){
        await this.page.goto(this.url)
    }
    async isVisible(locator) {
      return await locator.isVisible();
      }
    async goBack(){
        await this.page.goBack();
    }
    async refreshPage() {
        await this.page.reload();
      }
    //Element Interaction
    async click(locator) {
        return await locator.click();
      }
      
    async type(selector, text) {
        await this.page.fill(selector, text);
      }
      
    async pressKey(selector, key) {
        await this.page.press(selector, key);
      }
    //Element Checks
      
    async isHidden(selector) {
        return !(await this.page.isVisible(selector));
      }
      
    async isEnabled(selector) {
        return await this.page.isEnabled(selector);
      }
      
    async getText(selector) {
        return await this.page.textContent(selector);
      }
    //Waiting Helpers
    async waitForVisible(selector, timeout = 5000) {
        await this.page.waitForSelector(selector, { state: 'visible', timeout });
      }
      
    async waitForHidden(selector, timeout = 5000) {
        await this.page.waitForSelector(selector, { state: 'hidden', timeout });
      }
}