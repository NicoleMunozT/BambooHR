import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../fixtures/test_data";
import { SELECTORS } from "../../support/selectors";

Given("The user is on the Add New Employee page",() => {
    cy.get(SELECTORS.registeremployee.newEmployee, { timeout: TIMEOUT })
    .should("be.visible")
    .click({force:true});
    cy.wait(TIMEOUT)
    cy.get(SELECTORS.registeremployee.newEmployeeOption, { timeout: TIMEOUT })
    .should("be.visible")
    .click({ multiple: true, force:true });
    cy.contains("span", "Add Anyway").click();
    cy.wait(TIMEOUT)
})
When("The user enters the data in form", () => {
    cy.get(SELECTORS.registeremployee.firstnameField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.newemployee.firstName)
    cy.get(SELECTORS.registeremployee.lastnameField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.newemployee.lastName)
    cy.get(SELECTORS.registeremployee.hiredateField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.newemployee.hireDate)
 
})
 When("The user submits the employee registration form", () => {
    cy.get(SELECTORS.registeremployee.saveButton,{timeout: TIMEOUT})
    .should("be.visible")
    .click();
 })
 Then("The user should see a confirmation message {string}", (message) => {
    cy.get(SELECTORS.registeremployee.registerToast,{timeout: TIMEOUT}).should("exist").should("include.text",`${message}`);
  })