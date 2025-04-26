import { expect } from '@playwright/test';
import BasePage from '../basePage.js';
export default class MainPageHeader extends BasePage {
    constructor(page) {
      super(page); 
      this.selectors = {
        homeButton: page.locator('a.btn.header-link.-active', { hasText: 'Home' }),
        aboutButton: page.locator('button.btn.header-link', { hasText: 'About' }),
        contactsButton: page.locator('button.btn.header-link', { hasText: 'Contacts' }),
        guestLogInButton: page.locator('button', { hasText: 'Guest log in' }),
        signInButton: page.locator('button.btn.btn-outline-white.header_signin', { hasText: 'Sign In' })
      };
    }
    async isVisibleHeaderButton(buttonName){
      const locator = this.selectors[buttonName];
      if (!locator) throw new Error(`No such button: ${buttonName}`);
      await expect(locator).toBeVisible();
    }
  
    async clickHeaderButton(buttonName){
      const locator = this.selectors[buttonName];
      if (!locator) throw new Error(`No such button: ${buttonName}`);
      await locator.click();
    }
  }