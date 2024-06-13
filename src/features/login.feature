Feature: Login

  Scenario: Error on empty login
    Given User is located on the main page of saucedemo website
    When User clicks the "Login" button
    Then User should see "Epic sadface: Username is required" error message
