import { createUser, User } from '@/support/generate'

describe('Checkout', () => {
  let user: User

  describe('Free Games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy free game', () => {
      // visitar sign-up
      cy.visit('/sign-up')

      // preencher os dados
      cy.signUp(user)

      // conferir se redirecionou para home
      cy.url({ timeout: 10000 }).should('eq', `${Cypress.config().baseUrl}/`)

      // ir para explore page
      cy.findByRole('link', { name: /explore/i }).click()
      cy.url({ timeout: 25000 }).should(
        'eq',
        `${Cypress.config().baseUrl}/games`
      )

      // filtrar por jogos free
      cy.findByText(/free/i).click()
      cy.url().should('contain', 'price_lte=0')

      // adicionar um jogo ao carrinho
      cy.addToCartByIndex(0)

      // verificar se o carrinho tem 1 jogo e abrir dropdown
      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()

      // clicar para fazer a compra

      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      // conferir se redirecionou para cart
      cy.url({ timeout: 25000 }).should(
        'eq',
        `${Cypress.config().baseUrl}/cart`
      )

      // encontrar um texto de só jogos free
      cy.findByText(/Only free games, click buy and enjoy!/i).should('exist')

      // clicar para comprar
      cy.findByRole('button', { name: /buy now/i }).click()

      // conferir se redirecionou para success
      cy.url({ timeout: 25000 }).should(
        'eq',
        `${Cypress.config().baseUrl}/success`
      )

      // buscar pelo texto de sucesso
      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn(user.email, user.password)
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/profile/orders`
      )

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
