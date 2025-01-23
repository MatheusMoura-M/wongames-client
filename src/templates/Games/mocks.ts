import { QUERY_GAMES } from '@/graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { pagination: { limit: 15 }, filters: {}, sort: undefined }
  },
  result: {
    data: {
      games: [
        {
          documentId: '1',
          name: 'Sample Game',
          slug: 'sample-game',
          price: 18.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: '/sample-game.jpg'
          },
          __typename: 'Game'
        }
      ],
      games_connection: {
        pageInfo: {
          total: 3
        },
        __typename: 'GameConnection'
      }
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      pagination: { limit: 15, start: 1 },
      filters: {},
      sort: undefined
    }
  },
  result: {
    data: {
      games: [
        {
          documentId: '2',
          name: 'Fetch More Game',
          slug: 'fetch-more',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: '/sample-game.jpg'
          },
          __typename: 'Game'
        }
      ],
      games_connection: {
        pageInfo: {
          total: 4
        },
        __typename: 'GameConnection'
      }
    }
  }
}

export const emptyGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { pagination: { limit: 15 }, filters: {}, sort: undefined }
  },
  result: {
    data: {
      games: [],
      games_connection: {
        pageInfo: {
          total: 0
        },
        __typename: 'GameConnection'
      }
    }
  }
}
