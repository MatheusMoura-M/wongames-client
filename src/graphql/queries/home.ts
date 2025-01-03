import { gql } from '@apollo/client'
import { BannerFragment } from '../fragments/banner'
import { GameFragment } from '../fragments/game'

// GET_HOME | QUERY_HOME
export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      filters: { release_date: { lte: "2024-12-29" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      ...GameFragment
    }
  }

  ${BannerFragment}
  ${GameFragment}
`
