const { Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');

Then(/^User should see "(.*)" error message$/, async (expectedError) => {
    await expect(loginPage.errorMessage).toBeDisplayed();
    await expect(loginPage.errorMessage).toHaveText(expectedError);
})
