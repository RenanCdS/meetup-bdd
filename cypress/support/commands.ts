// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
  if (email) {
    cy.get('input[formcontrolname=email]')
      .clear()
      .type(email);
  } else {
    cy.get('input[formcontrolname=email]')
    .clear()
    .blur();
  }

  if (password) {
    cy.get('input[formcontrolname=password]')
      .clear()
      .type(password);
  } else {
    cy.get('input[formcontrolname=password]')
    .clear()
    .blur();
  }

  cy.get('button')
    .contains('Entrar')
    .click();
});
