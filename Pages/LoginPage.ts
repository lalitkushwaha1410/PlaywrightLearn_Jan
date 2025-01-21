import {Locator, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator; // use of readonly : Page object cannot be reassigned
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    /*
    Immutable Reference: The readonly modifier ensures that once the page object is assigned to a specific 
    instance (e.g., the page of a browser), it cannot be reassigned to another Page object. 
    This helps in preventing unintended changes to the reference of the page during the execution of the test, 
    leading to more predictable and stable code.
    */

    constructor(page: Page) { // constructor is used to initialize the locators
        this.page = page;
        this.usernameInput = page.getByLabel('Username:');
        this.passwordInput = page.getByLabel('Password:');
        this.loginButton = page.getByRole('button', { name: 'Sign In' })
    }

    /*
    The constructor's role is to initialize the class by setting up 
    initial values and configuring the necessary elements from the web page for subsequent interactions.
    */
    async logIntoApplication(username: string, password: string) {
        await this.usernameInput.fill('rahulshettyacademy');
        await this.passwordInput.fill('learning');
        await this.page.getByLabel('I Agree to the terms and\n\t\t\t\t\t\t\t\t\t\t\tconditions').check();
        await Promise.all([this.page.waitForNavigation(), this.loginButton.click()]);
    }

    //class method to log into the application
}