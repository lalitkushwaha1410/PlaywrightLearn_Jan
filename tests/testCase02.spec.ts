import { test, expect, chromium } from '@playwright/test';


test.describe('Test Describe', async() => { 

	test(' Browser Context Test @smoke', async ({page})=>
	{       
    const browser = await chromium.launch();

    // Creating two independent contexts
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    // Opening pages in different contexts
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await page1.goto('https://www.google.co.in');
    await page2.goto('https://www.gmail.com');

    // Each context has separate storage (no shared session)
    await browser.close();
	});

});