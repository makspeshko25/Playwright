import * as Modules from '../index.js';

export default class ExpensesPage extends Modules.BasePage{
    constructor(page){
        super(page);
        this.selectors = {
            expensesHeading: this.page.locator('app-fuel-expenses h1', { hasText: 'Fuel Expenses' }), 
            noCarsMessage: this.page.locator('p.h3.panel-empty_message', { hasText: 'You don’t have any cars in your garage' }),
            noExpenseMessage: this.page.locator('p.h3.panel-empty_message', { hasText: 'You don’t have any fuel expenses filed in' }),
            addExpenseButtonDisabled: this.page.locator('button.btn.btn-primary[disabled]', { hasText: 'Add an expense' }),
            addExpenseButtonActive: this.page.locator('button.btn.btn-primary', { hasText: 'Add an expense' }),
            dropDownButton: this.page.locator('button.dropdown-toggle.car-select-dropdown_toggle', { hasText: 'Audi R8' }),
            firstOption: this.page.locator('ul.car-select-dropdown_menu > li').nth(0),
            secondOption: this.page.locator('ul.car-select-dropdown_menu > li').nth(1),
            thirdOption: this.page.locator('ul.car-select-dropdown_menu > li').nth(2)
        }
    }
    async isExpenseHeadingVisible(){
        return this.isVisible(this.selectors.expensesHeading)
    }
    async isNoCarsMessageVisible(){
        return this.isVisible(this.selectors.noCarsMessage)
    }
    async isNoExpenseMessageVisible(){
        return this.isVisible(this.selectors.noExpenseMessage)
    }
    async isDisabledAddButtonVisible(){
        return this.isVisible(this.selectors.addExpenseButtonDisabled)
    }
    async isActiveAddButtonVisible(){
        return this.isVisible(this.selectors.addExpenseButtonActive)
    }
    async isExpenseTabHighlighted(){
        return this.isVisible(this.Modules.LeftNavPanel.fuelExpensesActiveTab)
    }
    async clickAddExpenseButton(){
        return this.click(this.selectors.addExpenseButtonActive)
    }
    async isDropDownVisible(){
        return this.isVisible(this.selectors.dropDownButton)
    }
    async clickOnDropDownButton(){
        return this.click(this.selectors.dropDownButton)
    }
    async clickOnFirstOption(){
        return this.click(this.selectors.firstOption)
    }
    async clickOnSecondOption(){
        return this.click(this.selectors.secondOption)
    }
    async clickOnThirdOption(){
        return this.click(this.selectors.thirdOption)
    }
}
