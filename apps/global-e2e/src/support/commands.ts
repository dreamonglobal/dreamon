// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(email: string, password: string): void
    changeLanguage(language: 'english' | 'spanish' | 'portuguese'): void
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password)
})

Cypress.Commands.add('changeLanguage', (language: 'english' | 'spanish' | 'portuguese') => {
    cy.get('[data-cy="changeLanguage"]').click();
    cy.get('.ReactModal__Content.ReactModal__Content--after-open').should('be.visible')
    cy.get('[data-cy="updateLanguageTitle"]').contains('Update Language')
    if (language === 'english') {
      cy.get('[data-cy="englishBtn"]').click();
      }
    if (language === 'spanish') {
      cy.get('[data-cy="spanishBtn"]').click();
    }
    if (language === 'portuguese') {
      cy.get('[data-cy="portugueseBtn"]').click();
    }
})
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
