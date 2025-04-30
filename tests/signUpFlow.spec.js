import { SignUpModal, MainPage, SettingsPage } from '../index.js';
import { test, expect } from '@playwright/test';

test.describe('Main Page functionality check', () => {
    test.use({
        httpCredentials: {
          username: 'guest',
          password: 'welcome2qauto',
        }
    }); 
    test.beforeEach(async ({ page }) => {
        await page.goto(process.env.BASE_URL);
    });
    test('Successful SignUp flow',async({page})=>{
        const signUpModal = new SignUpModal(page);
        const mainPage = new MainPage(page);
        await mainPage.clickSignUpButton();
        await signUpModal.enterName(process.env.NAME);
        await signUpModal.enterLastName(process.env.LASTNAME);
        await signUpModal.enterEmail(process.env.EMAIL);
        await signUpModal.enterPassword(process.env.PASSWORD);
        await signUpModal.reenterPassword(process.env.PASSWORD);
        await signUpModal.clickRegisterButton();
        await page.waitForURL('**/panel/garage', { timeout: 10000 });
        expect(page.url()).toBe(process.env.BASE_URL+'panel/garage');
    })
    test.afterEach(async ({page}) => {
        const settingsPage = new SettingsPage(page);
        await page.goto(process.env.BASE_URL+'panel/settings');
        await settingsPage.deleteUserAccount();
    });
});