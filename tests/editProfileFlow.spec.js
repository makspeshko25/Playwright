import { test, expect } from '@playwright/test';
import {ProfilePage, ProfileEditModal} from  '../index.js';

test.describe('Profile page tests',()=>{
    test.use({
        httpCredentials: {
          username: 'guest',
          password: 'welcome2qauto',
        }
    }); 
    test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    const signInButton = page.locator('button.header_signin');
    await signInButton.click();
    const emailInput = page.locator('#signinEmail');
    await emailInput.fill('makspeshko+99@gmail.com');
    const passwordInput = page.locator('#signinPassword');
    await passwordInput.fill('Qwertyuio1234');
    const loginButton = page.locator('button.btn.btn-primary', { hasText: 'Login' });
    await loginButton.click();
    await page.waitForURL('**/panel/garage');
    await page.goto(process.env.BASE_URL+'panel/profile');
    });
        test('Update all fields of Profile data/Positive flow',async({page})=>{
            const profilePage = new ProfilePage(page);
            const profileEditModal = new ProfileEditModal(page);
            await profilePage.clickEditProfileButton();
            await profileEditModal.typeNameField();
            await profileEditModal.typeLastNameField();
            await profileEditModal.typeCountryField();
            await profileEditModal.clickBirthdaySelectButton();
            await profileEditModal.selectYear('1999');
            await profileEditModal.selectMonth('Jan');
            await profileEditModal.clickSpecificDay();
            await profileEditModal.uploadFile();
            await profileEditModal.clickSaveButton();
            await page.waitForTimeout(5000);
        })
})