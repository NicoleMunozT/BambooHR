import {Before} from "cypress-cucumber-preprocessor/steps";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../support/test_data";
import { SELECTORS } from "../../support/selectors";

Before({ tags: "@loginRequired" }, () => {
    cy.visit("/")
    cy.get(SELECTORS.login.emailField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.users.validUser.username)
    cy.get(SELECTORS.login.passwordField,{timeout:TIMEOUT}).should("be.visible").type(TEST_DATA.users.validUser.password)
    cy.get(SELECTORS.login.loginButton,{timeout:TIMEOUT}).should("be.visible").click()
    cy.contains('button', 'Yes, Trust this Browser').click();
});