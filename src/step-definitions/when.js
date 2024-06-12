const { When} = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page')

When(/^User click "Login" button$/, async () => {
    console.log("When block")
})