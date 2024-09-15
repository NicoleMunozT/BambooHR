import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../fixtures/test_data";
import { SELECTORS } from "../../support/selectors";
 
Given("The user is on the login page",() => {
    cy.visit("/")
})
 When("The user enters the username and password", () => {
    cy.get(SELECTORS.login.emailField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.users.validUser.username)
    cy.get(SELECTORS.login.passwordField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.users.validUser.password)
 })
 When("The user clicks the login button", () => {
    cy.get(SELECTORS.login.loginButton,{timeout:TIMEOUT}).should("be.visible").click()
  })

  Then("The user should see the BambooHR dashboard", () => {
    cy.contains('button', 'Yes, Trust this Browser').click();
  })