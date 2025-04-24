import * as Modules from '../index.js';

export default class GaragePage extends Modules.BasePage{
    constructor(page){
        super(page);
        this.selectors = {
            garageHeading: this.page.locator('app-garage h1', { hasText: 'Garage' }), 
            noCarsMessage: this.page.locator('p.panel-empty_message', {hasText: 'You don’t have any cars in your garage'}),
            addCarButton: this.page.locator('button.btn.btn-primary', { hasText: 'Add car' })
        }
    }
    async isGarageheadingVisible(){
        return this.isVisible(this.selectors.garageHeading)
    }
    async isNoCarsMessageVsible(){
        return this.isVisible(this.selectors.noCarsMessage)
    }
    async isAddCarButtonVisible(){
        return this.isVisible(this.selectors.addCarButton)
    }
    async clickAddCarButton(){
        return this.click(this.selectors.addCarButton)
    }
    async isGarageTabHighlighted(){
        return this.isVisible(this.Modules.LeftNavPanel.activeGarageTab)
    }
}
