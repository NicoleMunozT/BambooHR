import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../support/test_data";
import { SELECTORS } from "../../support/selectors";

Given("The user is on the Add New Employee page",() => {
    
})
When("The user enters the data in form", () => {
    cy.get(SELECTORS.login.emailField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.users.validUser.username)
    cy.get(SELECTORS.login.passwordField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.users.validUser.password)
 })
 When("The user submits the employee registration form", () => {
    cy.get(SELECTORS.login.emailField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.users.validUser.username)
    cy.get(SELECTORS.login.passwordField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.users.validUser.password)
 })
 Then("The user should see a confirmation message {string}", () => {
    cy.contains('button', 'Yes, Trust this Browser').click();
  })