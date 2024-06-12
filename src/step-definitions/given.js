const { Given } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');

Given(/^User is located on the main page of saucedemo website$/, async () => {
    console.log("Given block")
})

