import { createUser, User } from '@/support/generate'

describe('Checkout', () => {
  let user: User
  before(() => {
    user = createUser()
  })

  describe('Free Games', () => {
    it('should buy free game', () => {
      // visitar sign-up
      cy.visit('/sign-up')

      // preencher os dados
      cy.signUp(user)

      // conferir se redirecionou para home
      cy.url({ timeout: 10000 }).should('eq', `${Cypress.config().baseUrl}/`)

      // abrir a página de explore
      cy.findByRole('link', { name: /explore/i }).click()
      cy.url({ timeout: 25000 }).should(
        'eq',
        `${Cypress.config().baseUrl}/games`
      )

      // filtrar por jogos free
      cy.findByText(/free/i).click()
      cy.url().should('contain', `price_lte=0`)

      // adicionar um jogo ao carrinho
      cy.addToCartByIndex(0)

      // vou para página de checkout
      cy.findAllByLabelText(/shopping cart/i)
        .first()
        .click()
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      // conferir se redirecionou para cart
      cy.url({ timeout: 25000 }).should(
        'eq',
        `${Cypress.config().baseUrl}/cart`
      )

      // verificar se tá escrito que é só jogo gratuito
      cy.findByText(/only free games, click buy and enjoy!/i).should('exist')

      // buy game
      cy.findByRole('button', { name: /buy now/i }).click()

      // conferir se redirecionou para success
      cy.url({ timeout: 25000 }).should(
        'eq',
        `${Cypress.config().baseUrl}/success`
      )

      // buscar pelo texto de sucesso
      cy.findByRole('heading', {
        name: /your purchase was successful!/i
      }).should('exist')

      // clicar no link de orders
      cy.findByRole('link', { name: /^orders list/i }).click()

      // verificar se tem um jogo comprado
      cy.getByDataCy('game-item', { timeout: 25000 }).should('have.length', 1)
    })
  })
})
