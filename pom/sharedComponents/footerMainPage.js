import BasePage from '../basePage.js';

export default class MainPageFooter extends BasePage{
    constructor(page) {   
        super(page);  
        this.selectors={
        mainWebsiteLinkbutton: this.page.locator('a.contacts_link[href="https://ithillel.ua"]'),
        supportLinkButton: this.page.locator('a.contacts_link h4[href="mailto:developer@ithillel.ua"]'),
        facebookLinkButton: this.page.locator('a[href="https://www.facebook.com/Hillel.IT.School"]'),
        telegramLinkButton: this.page.locator('a[href="https://t.me/ithillel_kyiv"]'),
        youtubeLinkButton: this.page.locator('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]'),
        instagramLinkButton: this.page.locator('a[href="https://www.instagram.com/hillel_itschool/"]'),
        linkedinLinkButton: this.page.locator('a[href="https://www.linkedin.com/school/ithillel/"]')
    }}
    async isVisibleFooterButton(buttonName){
        const selector = this.selectors[buttonName];
        if (!selector) throw new Error(`No such button: ${buttonName}`);
        await this.isVisible(selector);
    }
    
    async clickFooterButton(buttonName){
        const selector = this.selectors[buttonName];
        if (!selector) throw new Error(`No such button: ${buttonName}`);
        await this.click(selector);
    }
}