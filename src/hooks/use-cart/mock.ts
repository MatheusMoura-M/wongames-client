import { QueryGamesDocument } from '@/graphql/queries/__generated__/QueryGames'

export const gamesMock = {
  request: {
    query: QueryGamesDocument,
    variables: {
      filters: {
        documentId: {
          in: ['ahef7s9utp83c41ezwfggp45', 'gk60wzt9lvucsx56a73e7cnl']
        }
      }
    }
  },
  result: {
    data: {
      games: [
        {
          documentId: 'ahef7s9utp83c41ezwfggp45',
          name: 'Sample Game',
          slug: 'sample-game',
          short_description: 'sample description',
          price: 10.5,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: '/sample-game.jpg'
          },
          __typename: 'Game'
        },
        {
          documentId: 'gk60wzt9lvucsx56a73e7cnl',
          name: 'Sample Game',
          slug: 'sample-game',
          short_description: 'sample description',
          price: 10.5,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: '/sample-game.jpg'
          },
          __typename: 'Game'
        }
      ],
      games_connection: {
        pageInfo: {
          total: 2
        },
        __typename: 'GameConnection'
      }
    }
  }
}

export const singleGameMock = {
  request: {
    query: QueryGamesDocument,
    variables: {
      filters: {
        documentId: {
          in: ['ahef7s9utp83c41ezwfggp45']
        }
      }
    }
  },
  result: {
    data: {
      games: [
        {
          documentId: 'ahef7s9utp83c41ezwfggp45',
          name: 'Sample Game',
          slug: 'sample-game',
          short_description: 'sample description',
          price: 10.5,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: '/sample-game.jpg'
          },
          __typename: 'Game'
        }
      ],
      games_connection: {
        pageInfo: {
          total: 1
        },
        __typename: 'GameConnection'
      }
    }
  }
}

export const cartItems = [
  {
    documentId: 'ahef7s9utp83c41ezwfggp45',
    img: 'http://localhost:1337/sample-game.jpg',
    price: '$10.50',
    title: 'Sample Game'
  },
  {
    documentId: 'gk60wzt9lvucsx56a73e7cnl',
    img: 'http://localhost:1337/sample-game.jpg',
    price: '$10.50',
    title: 'Sample Game'
  }
]
