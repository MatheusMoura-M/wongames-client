import { QueryWishlistDocument } from '@/graphql/queries/__generated__/QueryWishlist'

const gameMock = (documentId: string) => ({
  documentId,
  name: `Sample Game ${documentId}`,
  slug: `sample-game-${documentId}`,
  price: 10.5,
  developers: [{ name: 'sample developer' }],
  cover: {
    url: '/sample-game.jpg'
  },
  __typename: 'Game'
})

export const wishlistMock = {
  request: {
    query: QueryWishlistDocument,
    context: { session: { jwt: '123' } },
    variables: {
      identifier: 'lorem@ipsum.com'
    }
  },
  result: {
    data: {
      wishlists: [
        {
          documentId: 'onvc3g44nhn63bp9xji52742',
          games: [
            gameMock('ahef7s9utp83c41ezwfggp45'),
            gameMock('gk60wzt9lvucsx56a73e7cnl')
          ]
        }
      ]
    }
  }
}

export const wishlistItems = [
  {
    documentId: 'ahef7s9utp83c41ezwfggp45',
    title: 'Sample Game ahef7s9utp83c41ezwfggp45',
    slug: 'sample-game-ahef7s9utp83c41ezwfggp45',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  },
  {
    documentId: 'gk60wzt9lvucsx56a73e7cnl',
    title: 'Sample Game gk60wzt9lvucsx56a73e7cnl',
    slug: 'sample-game-gk60wzt9lvucsx56a73e7cnl',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  },
  {
    documentId: 'onvc3g44nhn63bp9xji52743',
    title: 'Sample Game onvc3g44nhn63bp9xji52743',
    slug: 'sample-game-onvc3g44nhn63bp9xji52743',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  }
]
