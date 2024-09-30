import '@shelex/cypress-allure-plugin';

export const TIMEOUT = 5000
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });