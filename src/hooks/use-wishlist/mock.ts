import { QueryWishlistDocument } from '@/graphql/queries/__generated__/QueryWishlist'

const gameMock = (documentId: string) => ({
  documentId,
  name: `Sample Game ${documentId}`,
  slug: `sample-game-${documentId}`,
  price: 10.5,
  developers: [{ name: 'sample developer' }],
  cover: {
    src: '/sample-game.jpg'
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
    id: 'onvc3g44nhn63bp9xji52741',
    title: 'Sample Game 1',
    slug: 'sample-game-1',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  },
  {
    id: 'onvc3g44nhn63bp9xji52742',
    title: 'Sample Game 2',
    slug: 'sample-game-2',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  },
  {
    id: 'onvc3g44nhn63bp9xji52743',
    title: 'Sample Game 3',
    slug: 'sample-game-3',
    developer: 'sample developer',
    img: 'http://localhost:1337/sample-game.jpg',
    price: 10.5
  }
]
