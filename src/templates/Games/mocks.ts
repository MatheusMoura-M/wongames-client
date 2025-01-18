import { QUERY_GAMES } from '@/graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { pagination: { limit: 15 }, filters: {} }
  },
  result: {
    data: {
      games: [
        {
          name: 'Sample Game',
          slug: 'sample-game',
          price: 18.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: '/sample-game.jpg'
          },
          __typename: 'Game'
        }
      ]
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { pagination: { limit: 15, start: 1 }, filters: {} }
  },
  result: {
    data: {
      games: [
        {
          name: 'Fetch More Game',
          slug: 'fetch-more',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: '/sample-game.jpg'
          },
          __typename: 'Game'
        }
      ]
    }
  }
}

export const emptyGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { pagination: { limit: 15 }, filters: {} }
  },
  result: {
    data: {
      games: []
    }
  }
}
