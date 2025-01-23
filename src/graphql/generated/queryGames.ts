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
  documentId: string
  name: string
  slug: string | null
  cover: QueryGames_games_cover | null
  developers: (QueryGames_games_developers | null)[]
  price: number
}

export interface QueryGames_games_connection_pageInfo {
  __typename: 'Pagination'
  total: number
}

export interface QueryGames_games_connection {
  __typename: 'GameEntityResponseCollection'
  pageInfo: QueryGames_games_connection_pageInfo
}

export interface QueryGames {
  games: (QueryGames_games | null)[]
  games_connection: QueryGames_games_connection | null
}

export interface QueryGamesVariables {
  pagination?: PaginationArg | null
  filters?: GameFiltersInput | null
  sort?: (string | null)[] | null
}
