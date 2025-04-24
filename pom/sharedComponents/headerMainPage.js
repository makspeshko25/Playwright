import * as Modules from '../index.js';

export default class MainPageHeader {
    constructor(page){
        super(page);
        this.selectors = {
            homeButton: this.page.locator('button.btn.header-link-active',{hasText:'Home'}),
            aboutButton: this.page.locator('button.btn.header-link',{hasText:'About'}),
            contactsButton: this.page.locator('button.btn.header-link',{hasText:'Contacts'}),
            guestLogInButton: this.page.locator('button.header-link-guest', {hasText:'Guest log in'}),
            signInButton: this.page.locator('button.btn.btn-outline-white header_signin', {hasText:'Sign In'})
        }
    }
    async isVisibleHeaderButton(buttonName){
        const selector = this.selectors[buttonName];
        if (!selector) throw new Error(`No such button: ${buttonName}`);
        await this.isVisible(selector);
    }
    async clickHeaderButton(buttonName){
        const selector = this.selectors[buttonName];
        if (!selector) throw new Error(`No such button: ${buttonName}`);
        await this.click(selector); 
    }

}