import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../fixtures/test_data";
import { SELECTORS } from "../../support/selectors";

Given("The user is on the timeoff request page", () => {
  cy.get(SELECTORS.timeoff.requestTimeOffButton, { timeout: TIMEOUT })
    .should("be.visible")
    .click();
});

When("The user fullfill the form", () => {
  cy.get(SELECTORS.timeoff.startDate, { timeout: 8000 })
    .should("be.visible")
    .type(TEST_DATA.timeoff.startDate);
  cy.get(SELECTORS.timeoff.endDate, { timeout: TIMEOUT })
    .should("be.visible")
    .type(TEST_DATA.timeoff.endDate);
  cy.get(SELECTORS.timeoff.category, { timeout: TIMEOUT })
    .should("be.visible")
    .click();
  cy.get(SELECTORS.timeoff.selectCategory, { timeout: TIMEOUT })
    .should("be.visible")
    .eq(1)
    .click();
  cy.wait(TIMEOUT);
  cy.get(SELECTORS.timeoff.amount, { timeout: TIMEOUT })
    .should("be.visible")
});
When("The user submits the timeoff request", () => {
  cy.wait(TIMEOUT);
  cy.get(SELECTORS.timeoff.sendRequest, { timeout: TIMEOUT })
    .should("be.visible")
    .click();
});

Then("The user should be redirect to My info page", () => {
    cy.url().should('eq', 'https://qa.bamboohr.com/employees/pto/?id=8');
});
