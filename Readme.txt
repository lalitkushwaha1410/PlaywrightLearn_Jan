1. create a empty folder .e.g PlaywrightLearn.
2. playwright has inbuilt all the framework related components for test automation.
3. command - npm init playwright - this is for creating a new node project having playwright structure.
playwright wants you to have some skeleton for automation tests , so with this command , we will be able to create a new node projects having all the components from the playwright structure.

4.playwright.config.js - this is basically a test runner fo your test automation.
5. async function() and await in test comes in combination.

async function()and async ()=> both are same , called anonymous function.

6. to install playwright - npm install @playwright/test
7. now run playwright install command - npx playwright install
 yarn command - yarn playwright install

8. to run specific spec file : npx playwright test --headed tests/imageTest.spec.js
9. to run playwright in debug mode - npx playwright test --headed --debug
10. allure reporting :
install the dependency : npm i -D @playwright/test allure-playwright

run the test case with this command : npx playwright test --headed --reporter=line,allure-playwright
inline will create a report in line format giving the info like how many testcases passed/ failed, allure will take this info
as input from inline report.
allure-results will get generated in the folder.
Run followinf commands :
npm install -g allure-commandline --save-dev
allure generate ./allure-results --clean

11. Dynamic wait mechanism :
  
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');             <<<==========
   await page.locator(".card-body b").first().waitFor();    <<<==========
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})

12. to open test in debug mode :
npx playwright test logintest --headed --debug  , yarn playwright test

13. to open play and record in playwright :
 run command : npx playwright codegen https://www.google.co.in

14. Verify Traces :
open the html report and download traces in zip format.
hit url : https://trace.playwright.dev/  and upload the traces zip file .

15. to run the test cases in UI test-runner mode :
npx playwright test logintest --ui

16. Getbylabel , GetbyText
 await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name : "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

17. To run test file with diff configuration , create a diff configuration file
run command :  npx playwright test logintest --headed --config playwright.config1.js

18. allure report : https://www.npmjs.com/package/allure-playwright


Inside that directory, you can run several commands:

npx playwright test --headed
Runs the tests in headed mode

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen
	
npx playwright test --headed --grep=regression
// to run specific tag (smoke , sanity ) for test cases.

for allure report gereration on local machine :
1. add dependency -  yarn add @playwright/test allure-playwright --dev  and   yarn add @playwright/test allure-playwright --dev  
2. now run tests using command - npx playwright test --reporter=line,allure-playwright
3. now run command : npx allure generate ./allure-results --clean 
4. now run command : npx allure open ./allure-report or npx allure serve allure-results
