import BasePage from "./basePage";

export default class SignUpModal extends BasePage{
    constructor(page){
        super(page);
        this.selectors = {
            nameField: this.page.locator('#signupName'),
            lastNameField: this.page.locator('#signupLastName'),
            emailField: this.page.locator('#signupEmail'),
            passwordField: this.page.locator('#signupPassword'),
            reenterPasswordField: this.page.locator('#signupRepeatPassword'),
            disabledRegisterButton: this.page.locator('button.btn.btn-primary:has-text("Register"):disabled'),
            activeRegisterButton: this.page.locator('button.btn.btn-primary:has-text("Register"):not(:disabled)')
        }
    }

        async enterName(name) {
            await this.selectors.nameField.fill(name);
        }
    
        async enterLastName(lastName) {
            await this.selectors.lastNameField.fill(lastName);
        }
    
        async enterEmail(email) {
            await this.selectors.emailField.fill(email);
        }
    
        async enterPassword(password) {
            await this.selectors.passwordField.fill(password);
        }
    
        async reenterPassword(password) {
            await this.selectors.reenterPasswordField.fill(password);
        }
    
        async isRegisterDisabled() {
            return await this.selectors.disabledRegisterButton.isVisible();
        }
    
        async clickRegisterButton() {
            await this.selectors.activeRegisterButton.click();
        }

}
