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
    //console.log('This is Before Each Hook')
  });


	test(' TestCase-01 : Login Scenario @smoke', async ({page})=>
	{       
    await page.goto(env.systest.url_1);
    await loginPage.logIntoApplication('rahulshettyacademy','learning');
    console.log('Inside test-1');
    
    
    //await page.close();
	});

	test(' TestCase-02 : Checkout Scenario @regression ', async ({page})=>
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
        await page.close();
        console.log('Inside test-2');
    });

    test(' TestCase-03   @smoke', async ({page})=>
      {       
        console.log("Inside test-3");
        
      });

    test(' TestCase-04   @sanity', async ({page})=>
        {       
          console.log("Inside test-5");
          
        });

    test(' TestCase-05  @smoke', async ({page})=>
          {       
            console.log("Inside test-5");
            
        });
    
    test(' TestCase-06  @regression', async ({page})=>
          {       
            console.log("Inside test-6");
            
        });
    
    test.only(' Swag app test', async ({page})=>
        {       
        await page.goto('https://www.saucedemo.com/v1/index.html');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await page.getByRole('link', { name: '1' }).click({
          button: 'right'
        });
        await expect(page.locator('#shopping_cart_container')).toContainText('1');
        await page.getByRole('link', { name: '1' }).click();
        await page.getByRole('button', { name: 'REMOVE' }).click();
          
        });

    
    // test.afterEach(async()=>{
    //     console.log('This is After Each Hook')
    // });

    // test.afterAll(async()=>{
    //     console.log('This is After All Hook')
    // });

});