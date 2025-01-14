/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg, GameFiltersInput } from './globalTypes'

// ====================================================
// GraphQL query operation: QueryGames
// ====================================================

export interface QueryGames_games_cover {
  __typename: 'UploadFile'
  url: string
}

export interface QueryGames_games_developers {
  __typename: 'Developer'
  name: string
}

export interface QueryGames_games {
  __typename: 'Game'
  name: string
  slug: string | null
  cover: QueryGames_games_cover | null
  developers: (QueryGames_games_developers | null)[]
  price: number
}

export interface QueryGames {
  games: (QueryGames_games | null)[]
}

export interface QueryGamesVariables {
  pagination?: PaginationArg | null
  filters?: GameFiltersInput | null
  sort?: (string | null)[] | null
}
