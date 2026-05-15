/// <reference types="cypress" />

import '@testing-library/cypress/add-commands'

Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider')
    .first()
    .within(() => {
      cy.findByRole('heading', {
        name: /tortura - a pirate's tale$/i
      })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(500)

      cy.findByRole('heading', {
        name: /cyberpunk 2077$/i
      })
      cy.findByRole('link', { name: /buy now/i })
    })
})

Cypress.Commands.add('shouldRenderShowcase', ({ name, hightlight = false }) => {
  cy.get(`[data-cy="${name}"]`).within(() => {
    cy.findByRole('heading', { name }).should('exist')

    cy.get(`[data-cy="highlight"]`).should(hightlight ? 'exist' : 'not.exist')

    if (hightlight) {
      cy.get(`[data-cy="highlight"]`).within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }
  })
})
