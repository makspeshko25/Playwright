import BasePage from "./basePage";

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
            specificDay: this.page.locator('div.ngb-dp-day[aria-label="Monday, April 14, 2025"] > div'),
            uploadProfilePhoto: this.page.locator('#editProfilePhoto'),
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
    async selectYear(){
        await this.selectors.yearDropdown.select(year)
    }
    async clickMonthDropdown(){
        await this.selectors.monthSelector.select(month)
    }
    async clickSpecificDay(){
        await this.selectors.specificDay.click()
    }
    async uploadFile(){
        await this.selectors.uploadProfilePhoto.setInputFiles('Users/maksympeshko/Downloads/pexels-infected-store-1913417375-29276076.jpg')
    }
    async clickSaveButton(){
        await this.selectors.saveButton.click()
    }
}