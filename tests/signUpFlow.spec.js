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
        await page.goto('https://qauto.forstudy.space/');
    });
    test('Successful SignUp flow',async({page})=>{
        const signUpModal = new SignUpModal(page);
        const mainPage = new MainPage(page);
        await mainPage.clickSignUpButton();
        await signUpModal.enterName('Maks');
        await signUpModal.enterLastName('Peshko');
        await signUpModal.enterEmail('makspeshk8t@gmail.com');
        await signUpModal.enterPassword('Qwerty123$');
        await signUpModal.reenterPassword('Qwerty123$');
        await signUpModal.clickRegisterButton();
        await page.waitForURL('**/panel/garage', { timeout: 10000 });
        expect(page.url()).toBe('https://qauto.forstudy.space/panel/garage');
    })
    test.afterEach(async ({page}) => {
        const settingsPage = new SettingsPage(page);
        await page.goto('https://qauto.forstudy.space/panel/settings');
        await settingsPage.deleteUserAccount();
    });
});