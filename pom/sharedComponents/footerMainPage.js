import BasePage from '../basePage.js';
import { expect } from '@playwright/test';
export default class MainPageFooter extends BasePage{
    constructor(page) {   
        super(page);  
        this.selectors={
        mainWebsiteLinkbutton: this.page.locator('a.contacts_link[href="https://ithillel.ua"]'),
        supportLinkButton: this.page.locator('a.contacts_link[href="mailto:developer@ithillel.ua"]'),
        facebookLinkButton: this.page.locator('a[href="https://www.facebook.com/Hillel.IT.School"]'),
        telegramLinkButton: this.page.locator('a[href="https://t.me/ithillel_kyiv"]'),
        youtubeLinkButton: this.page.locator('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]'),
        instagramLinkButton: this.page.locator('a[href="https://www.instagram.com/hillel_itschool/"]'),
        linkedinLinkButton: this.page.locator('a[href="https://www.linkedin.com/school/ithillel/"]')
    }}
    async isVisibleFooterButton(buttonName){
        const locator = this.selectors[buttonName];
        if (!locator) throw new Error(`No such button: ${buttonName}`);
        await expect(locator).toBeVisible();
    }
    
    async clickFooterButton(buttonName){
        const locator = this.selectors[buttonName];
        if (!locator) throw new Error(`No such button: ${buttonName}`);
        await locator.click();
    }
}