import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { GameFragment } from '../fragments/game'
import { QueryGames, QueryGamesVariables } from '../generated/queryGames'

export const QUERY_GAMES = gql`
  query QueryGames(
    $pagination: PaginationArg
    $filters: GameFiltersInput
    $sort: [String]
  ) {
    games(pagination: $pagination, filters: $filters, sort: $sort) {
      ...GameFragment
    }

    games_connection(filters: $filters) {
      pageInfo {
        total
      }
    }
  }

  ${GameFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($filters: GameFiltersInput) {
    games(filters: $filters) {
      documentId
      name
      description
      short_description
      price
      rating
      release_date
      gallery {
        src: url
        label: alternativeText
      }
      cover {
        src: url
      }
      developers {
        name
      }
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
`

export function useQueryGames(
  options?: QueryHookOptions<QueryGames, QueryGamesVariables>
) {
  return useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, options)
}
