import * as Modules from '../index.js';

export default class MainPage extends Modules.BasePage{
    constructor(page){
        super(page);
        this.selectors = {
            signUpButton: this.page.locator('button.hero-descriptor_btn:has-text("Sign up")')
        }
    }
}