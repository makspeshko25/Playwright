import BasePage from '../basePage.js';
import * as Modules from '../index.js';

export default class LeftNavPanel extends BasePage{
    constructor(page){
        super(page);
        this.selectors = {
            garageTab: this.page.locator('a.btn.btn-white.btn-sidebar.sidebar_btn[href="/panel/garage"]', { hasText: 'Garage' }),
            fuelExpensesTab: this.page.locator('a.btn.btn-white.btn-sidebar.sidebar_btn[href="/panel/expenses"]', { hasText: 'Fuel expenses' }),
            instructionsTab: this.page.locator('a.btn.btn-white.btn-sidebar.sidebar_btn[href="/panel/instructions"]', { hasText: 'Instructions' }),
            profileTab: this.page.locator('a.btn.btn-white.btn-sidebar.sidebar_btn.-profile[href="/panel/profile"]', { hasText: 'Profile' }),
            settingsTab: this.page.locator('a.btn.btn-white.btn-sidebar.sidebar_btn[href="/panel/settings"]', { hasText: 'Settings' }),
            logoutTab: this.page.locator('a.btn.btn-link.text-danger.btn-sidebar.sidebar_btn', { hasText: 'Log out' }),
            activeGarageTab: this.page.locator('a.btn.btn-white.btn-sidebar.sidebar_btn-active[href="/panel/garage"]', { hasText: 'Garage' }),
            fuelExpensesActiveTab: this.page.locator('a.btn.btn-white.btn-sidebar.sidebar_btn.-active', { hasText: 'Fuel expenses' }),
            profileTabActive: this.page.locator('a.sidebar_btn.-profile.-active', { hasText: 'Profile' }),
            settingsTabActive: this.page.locator('a.sidebar_btn.-active', { hasText: 'Settings' })
        }
    }
    async isVisiblePanelButton(buttonName){
        const selector = this.selectors[buttonName];
        if (!selector) throw new Error(`No such button: ${buttonName}`);
        await this.isVisible(selector);
    }
    async clickPanelButton(buttonName){
        const selector = this.selectors[buttonName];
        if (!selector) throw new Error(`No such button: ${buttonName}`);
        await this.click(selector); 
    }

}