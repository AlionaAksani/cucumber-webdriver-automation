const { When } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');

When(/^User clicks the "Login" button$/, async () => {
    await loginPage.btnLogin.click();
});

