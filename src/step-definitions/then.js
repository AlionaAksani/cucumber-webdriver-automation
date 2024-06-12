const { Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page')

Then(/^User should see "(.*)" error message$/, async (error) => {
    await loginPage.checkErrorMessage(error)
})