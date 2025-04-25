import { SignUpModal, MainPage, SettingsPage } from '../index.js';
import { test, expect } from '@playwright/test';

test.describe('Main Page functionality check', () => {
    test.use({
        httpCredentials: {
          username: 'guest',
          password: 'welcome2qauto',
        }
    }); 
    let pageInstance;
    test.beforeEach(async ({ page }) => {
        pageInstance=page;
        await page.goto('https://qauto.forstudy.space/');
    });
    test('Successful SignUp flow',async({page})=>{
        const signUpModal = new SignUpModal(page);
        const mainPage = new MainPage(page);
        await mainPage.selectors.signUpButton.click();
        await signUpModal.enterName('Maks');
        await signUpModal.enterLastName('Peshko');
        await signUpModal.enterEmail('makspeshkt@gmail.com');
        await signUpModal.enterPassword('Qwerty123$');
        await signUpModal.reenterPassword('Qwerty123$');
        await signUpModal.clickRegisterButton();
        await page.waitForURL('**/panel/garage');
        expect(page.url()).toBe('https://qauto.forstudy.space/panel/garage');
    })
    test.afterEach(async () => {
        const settingsPage = new SettingsPage(pageInstance);
        await pageInstance.goto('https://qauto.forstudy.space/panel/settings');
        await settingsPage.deleteUserAccount();
    });
});