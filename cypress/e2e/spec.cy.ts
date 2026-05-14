describe('Cypress TS', () => {
  it('should go to go Google', () => {
    cy.google()
  })

  it('should visit won games', () => {
    cy.visit('https://portfolio-matheus-15.vercel.app/')

    cy.findByText(/Full Stack Developer/i).should('exist')
  })
})
