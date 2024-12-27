import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query queryGames($pagination: PaginationArg) {
    games(pagination: $pagination) {
      name
      slug
      cover {
        url
      }
      developers {
        name
      }
      price
    }
  }
`
