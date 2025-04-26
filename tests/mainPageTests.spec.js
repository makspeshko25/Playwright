import { MainPageHeader,MainPageFooter } from '../index.js';
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

    test('Check all header elements are visible', async ({ page }) => {
        const mainPageHeader = new MainPageHeader(page);
        await mainPageHeader.isVisibleHeaderButton('homeButton');
        await mainPageHeader.isVisibleHeaderButton('aboutButton');
        await mainPageHeader.isVisibleHeaderButton('contactsButton');
        await mainPageHeader.isVisibleHeaderButton('guestLogInButton');
        await mainPageHeader.isVisibleHeaderButton('signInButton');
    });
    test('Check About button scrolls the page down', async({page})=>{
        const mainPageHeader = new MainPageHeader(page);
        const initialScrollPosition = await page.evaluate(() => window.scrollY);
        await mainPageHeader.clickHeaderButton('aboutButton');
        await page.waitForTimeout(1000);
        const newScrollPosition = await page.evaluate(() => window.scrollY);
        expect(newScrollPosition).toBeGreaterThan(initialScrollPosition);
        await page.evaluate(() => window.scrollTo(0, 0));
    });
    test('Check Contacts button scrolls the page down', async({page})=>{
        const mainPageHeader = new MainPageHeader(page);
        const initialScrollPosition = await page.evaluate(() => window.scrollY);
        await mainPageHeader.clickHeaderButton('contactsButton');
        await page.waitForTimeout(1000);
        const newScrollPosition = await page.evaluate(() => window.scrollY);
        expect(newScrollPosition).toBeGreaterThan(initialScrollPosition);
        await page.evaluate(() => window.scrollTo(0, 0));
    });
    test('Check after clicking on guest button the user is redirected to Garage page', async({page})=>{
        const mainPageHeader = new MainPageHeader(page);
        await mainPageHeader.clickHeaderButton('guestLogInButton');
        await page.waitForURL('**/panel/garage');
        expect(page.url()).toBe('https://qauto.forstudy.space/panel/garage');
    })
    test('Test footer elements are visible and contains relevant URL',async({page})=>{
        const mainPageFooter = new MainPageFooter(page);
        await mainPageFooter.isVisibleFooterButton('mainWebsiteLinkbutton');
        await mainPageFooter.isVisibleFooterButton('supportLinkButton');
        await mainPageFooter.isVisibleFooterButton('facebookLinkButton');
        await mainPageFooter.isVisibleFooterButton('telegramLinkButton');
        await mainPageFooter.isVisibleFooterButton('youtubeLinkButton');
        await mainPageFooter.isVisibleFooterButton('instagramLinkButton');
        await mainPageFooter.isVisibleFooterButton('linkedinLinkButton');
    } )
});
