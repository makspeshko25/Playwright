import BasePage from "./basePage";
import path from 'path';
export default class ProfileEditModal extends BasePage{
    constructor(page){
        super(page);
        this.selectors={
            closeButton: this.page.locator('button.close[aria-label="Close"]'),
            nameField: this.page.locator('#editProfileName'),
            lastNameField: this.page.locator('#editProfileLastName'),
            countryField: this.page.locator('#editProfileCountry'),
            birthdayField: this.page.locator('#editProfileDateBirth'),
            birthdaySelectorButton: this.page.locator('button.btn.date-picker-toggle'),
            yearDropdown: this.page.locator('select.custom-select[title="Select year"]'),
            monthSelector: this.page.locator('select.custom-select[title="Select month"]'),
            specificDay: this.page.locator('div.ngb-dp-day[aria-label="Thursday, January 14, 1999"] > div'),
            uploadProfilePhoto: this.page.locator('input[type="file"]#editProfilePhoto'),
            saveButton: this.page.locator('button.btn.btn-primary', {hasText:'Save'})
        }
    }
    async closeModal(){
        await this.selectors.closeButton.click()
    }
    async typeNameField(){
        await this.selectors.nameField.fill('Maksym')
    }
    async typeLastNameField(){
        await this.selectors.lastNameField.fill('Peshko')
    }
    async typeCountryField(){
        await this.selectors.countryField.fill('Ukraine')
    }
    async typeBirthdayField(){
        await this.selectors.birthdayField.fill('28.12.1999')
    }
    async clickBirthdaySelectButton(){
        await this.selectors.birthdaySelectorButton.click()
    }
    async selectYear(year){
        await this.selectors.yearDropdown.selectOption(year)
    }
    async selectMonth(month){
        await this.selectors.monthSelector.selectOption(month)
    }
    async clickSpecificDay(){
        await this.selectors.specificDay.click()
    }
    async uploadFile() {
            const filePath = path.resolve('pexels-infected-store-1913417375-29276076.jpg');
            await this.selectors.uploadProfilePhoto.waitFor({ state: 'visible', timeout: 5000 });
            await this.selectors.uploadProfilePhoto.setInputFiles(filePath);
    }
    async clickSaveButton(){
        await this.selectors.saveButton.click()
    }
}