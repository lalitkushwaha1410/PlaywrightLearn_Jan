import { test, expect } from '@playwright/test';
import { AddToCartPage } from '../Pages/AddToCartPage';
import { LoginPage } from '../Pages/LoginPage';
import { env } from '../testdata/environment';


test.describe('Login and Checkout Test Suite', async() => {
	let loginPage : LoginPage;  // create a object of the class to access its methods
  let addtoCart : AddToCartPage;  
	
	test.beforeAll(async()=>{
    console.log('This is Before All Hook')
	});

  test.beforeEach( async({page})=> { 
	
		loginPage = new LoginPage(page);
    addtoCart = new AddToCartPage(page);
    console.log('This is Before Each Hook')
  });


	test(' TC-1 : Login Scenario @smoke', async ({page})=>
	{       
    await page.goto(env.systest.url_1);
    await loginPage.logIntoApplication('rahulshettyacademy','learning');
    console.log('first test executed');
    //await page.close();
	});

	test(' TC-2 : Checkout Scenario @smoke', async ({page})=>
    {
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await page.getByLabel('Username:').click();
        await page.getByLabel('Username:').fill('rahulshettyacademy');
        await page.getByLabel('Password:').click();
        await page.getByLabel('Password:').fill('learning');
        await page.getByLabel('I Agree to the terms and\n\t\t\t\t\t\t\t\t\t\t\tconditions').check();
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.waitForTimeout(5000);
        await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet n' }).getByRole('button', { name: 'Add ' }).click();
        await page.getByText('Checkout ( 1 ) (current)').click();
        await page.getByRole('button', { name: 'Checkout' }).click();
        await page.getByLabel('Please choose your delivery location. Then click on purchase button').fill('Gurgaon');
        await page.getByText('I agree with the term & Conditions').click();
        await console.log('Second test executed');
        await page.close();
    });
    
    test.afterEach(async()=>{
        console.log('This is After Each Hook')
    });

    test.afterAll(async()=>{
        console.log('This is After All Hook')
    });

});