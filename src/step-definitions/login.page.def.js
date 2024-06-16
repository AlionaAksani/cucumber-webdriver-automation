const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');

Given(/^User is located on the main page of saucedemo website$/, async () => {
    await loginPage.open();
});

When(/^User clicks the "(.*)" button$/, async (btnName) => {
    await loginPage.buttons[btnName.toLowerCase()].click();
});

Then(/^User should see "(.*)" error message$/, async (expectedError) => {
    await expect(loginPage.errorMessage).toBeDisplayed();
    await expect(loginPage.errorMessage).toHaveText(expectedError);
});