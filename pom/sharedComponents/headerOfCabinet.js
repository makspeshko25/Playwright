import * as Modules from '../index.js';

export default class CabinetHeader extends Modules.BasePage{
    constructor(page) {   
        super(page);  
        this.selectors={
            garageHeaderLink: this.page.locator('a.btn.header-link.-active[href="/panel/garage"]', { hasText: 'Garage' }),
            fuelExpensesHeaderLink: this.page.locator('a.btn.header-link[href="/panel/expenses"]', { hasText: 'Fuel expenses' }),
            instructionsHeaderLink: this.page.locator('a.btn.header-link[href="/panel/instructions"]', { hasText: 'Instructions' }),
            myProfileButton: this.page.locator('button#userNavDropdown.dropdown-toggle.user-nav_toggle', { hasText: 'My profile' })
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