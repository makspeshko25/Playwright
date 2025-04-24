import * as Modules from '../index.js';

export default class ExpenseModal extends Modules.BasePage{
    constructor(page){
        super(page);
        this.selectors={
            vehicleDropDown: this.page.locator('#addExpenseCar'),
            reportDateField: this.page.locator('#addExpenseDate'),
            mileageField: this.page.locator('#addExpenseMileage'),
            numberOfLitersField: this.page.locator('#addExpenseLiters'),
            totalCostField: this.page.locator('#addExpenseTotalCost'),
            cancelButton: this.page.locator('button.btn.btn-secondary', { hasText: 'Cancel' }),
            disabledAddbutton: this.page.locator('button.btn.btn-primary[disabled]', { hasText: 'Add' }),
            activeAddButton: this.page.locator('button.btn.btn-primary:not([disabled])', { hasText: 'Add' }),
        }
    }
    async clickVehicleDropdown() {
        await this.selectors.vehicleDropDown.click();
    }

    async selectVehicleOption(value) {
        await this.selectors.vehicleDropDown.selectOption({ value });
    
    }

    async clickReportDateField() {
        await this.selectors.reportDateField.click();
    }

    async typeReportDate(date) {
        await this.selectors.reportDateField.fill(date);
    }

    async clickOnLitersField() {
        await this.selectors.numberOfLitersField.click();
    }

    async typeLitersValue(liters) {
        await this.selectors.numberOfLitersField.fill(liters);
    }

    async clickTotalCostField() {
        await this.selectors.totalCostField.click();
    }

    async typeTotalCostValue(cost) {
        await this.selectors.totalCostField.fill(cost);
    }

    async checkAddbuttonDisabled() {
        return await this.selectors.disabledAddbutton.isVisible();
    }

    async clickAddButton() {
        await this.selectors.activeAddButton.click();
    }

    async clickCancelButton() {
        await this.selectors.cancelButton.click();
    }
}