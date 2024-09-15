import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { TIMEOUT } from "../../support";
import { TEST_DATA } from "../../fixtures/test_data";
import { SELECTORS } from "../../support/selectors";

Given("The user is on the Assets page",() => {
    cy.get(SELECTORS.pagetabs.myinfoTab, { timeout: TIMEOUT })
    .should("be.visible").click();
    cy.wait(TIMEOUT)
    cy.url().then((url) => {
      if (url.includes('employees/notes')) {
        cy.get(SELECTORS.myinfotabs.assets).click(); 
        cy.wait(TIMEOUT)
      } 
    });
})
When("The user clicks on Add New Asset", () => {
    cy.contains("span", "+ Add Entry").click({force:true});
    cy.wait(TIMEOUT)
 
})
 When("The user selects the asset type", () => {
    cy.get(SELECTORS.addasset.assetcategoryField, { timeout: TIMEOUT }).should("be.visible").click()
    .wait(TIMEOUT)
    .type(TEST_DATA.addAsset.assetType);
 })
 When("The user submits the asset information", () => {
    cy.get(SELECTORS.addasset.saveButton, { timeout: TIMEOUT }).find("span").contains("Save").should("be.visible").click({ force:true });
 })
 
 Then("The user should see a message {string}", (message) =>  {
    cy.contains("div", `${message}`).should("exist");
  })
