import { SignUpModal, MainPage } from '../index.js';
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
    test('Validation text check for password reenter',async({page})=>{
        const signUpModal = new SignUpModal(page);
        const mainPage = new MainPage(page);
        await mainPage.selectors.signUpButton.click();
        await signUpModal.enterName('Maks');
        await signUpModal.enterLastName('Peshko');
        await signUpModal.enterEmail('makspeshkt1@gmail.com');
        await signUpModal.enterPassword('Qwerty123$');
        await signUpModal.reenterPassword('Qwerty1232$');
        await signUpModal.click(signUpModal.selectors.nameField)
        const errorMessageLocator = page.locator('p:has-text("Passwords do not match")');
        await errorMessageLocator.waitFor({ state: 'visible', timeout: 5000 });
        await expect(errorMessageLocator).toBeVisible();
    })
    test('Validation text check for weak password',async({page})=>{
        const signUpModal = new SignUpModal(page);
        const mainPage = new MainPage(page);
        await mainPage.selectors.signUpButton.click();
        await signUpModal.enterName('Maks');
        await signUpModal.enterLastName('Peshko');
        await signUpModal.enterEmail('makspeshkt1@gmail.com');
        await signUpModal.enterPassword('Qwert');
        await signUpModal.reenterPassword('Qwert');
        const errorMessageLocator = page.locator('p:has-text("Password has to be from 8 to 15 characters long")');
        await expect(errorMessageLocator).toBeVisible();
    })
    test('Validation text check name',async({page})=>{
        const signUpModal = new SignUpModal(page);
        const mainPage = new MainPage(page);
        await mainPage.selectors.signUpButton.click();
        await signUpModal.enterName('M');
        await signUpModal.enterLastName('Peshko');
        const errorMessageLocator = page.locator('p:has-text("Name has to be from 2 to 20 characters long")');
        await expect(errorMessageLocator).toBeVisible();
    })
    test('Validation text check lastname',async({page})=>{
        const signUpModal = new SignUpModal(page);
        const mainPage = new MainPage(page);
        await mainPage.selectors.signUpButton.click();
        await signUpModal.enterName('Maks');
        await signUpModal.enterLastName('P');
        await signUpModal.enterEmail('makspeshkt1@gmail.com');
        const errorMessageLocator = page.locator('text=Last name has to be from 2 to 20 characters long');
        await expect(errorMessageLocator).toBeVisible();
    })
});