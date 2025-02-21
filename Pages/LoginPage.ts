import {Locator, Page} from '@playwright/test';

export class LoginPage {
    private readonly page: Page; 
    private readonly usernameInput: Locator; 
    private readonly passwordInput: Locator; 
    private readonly loginButton: Locator;

    

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByLabel('Username:');
        this.passwordInput = page.getByLabel('Password:');
        this.loginButton = page.getByRole('button', { name: 'Sign In' })
    }


    async logIntoApplication(username: string, password: string) {
        await this.usernameInput.fill('rahulshettyacademy');
        await this.passwordInput.fill('learning');
        await this.page.getByLabel('I Agree to the terms and\n\t\t\t\t\t\t\t\t\t\t\tconditions').check();
        await Promise.all([this.page.waitForNavigation(), this.loginButton.click()]);
    }

    
}