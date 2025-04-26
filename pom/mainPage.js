import BasePage from "./basePage";

export default class MainPage extends BasePage{
    constructor(page){
        super(page);
        this.selectors = {
            signUpButton: this.page.locator('button.hero-descriptor_btn:has-text("Sign up")')
        }
    }
    async clickSignUpButton() {
        await this.selectors.signUpButton.click();
      }
}