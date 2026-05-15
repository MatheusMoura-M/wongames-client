describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.get('.slick-slider')
      .first()
      .within(() => {
        cy.findByRole('heading', {
          name: /tortura - a pirate's tale$/i
        })
        cy.findByRole('link', { name: /buy now/i })

        cy.get('.slick-dots > :nth-child(2) > button').click()
      })
  })
})
