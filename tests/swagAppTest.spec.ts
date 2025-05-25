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
    
    test(' Swag app test  @smoke', async ({page})=>
        { 
        console.log('This is test block')
        await page.goto('https://www.saucedemo.com/v1/index.html');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await expect(page.locator('#shopping_cart_container')).toContainText('1');
        await page.getByRole('link', { name: '1' }).click();
        await page.getByRole('button', { name: 'REMOVE' }).click();
          
        });

    
});