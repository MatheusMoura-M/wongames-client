/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg } from './globalTypes'

// ====================================================
// GraphQL query operation: queryGames
// ====================================================

export interface queryGames_games_cover {
  __typename: 'UploadFile'
  url: string
}

export interface queryGames_games_developers {
  __typename: 'Developer'
  name: string
}

export interface queryGames_games {
  __typename: 'Game'
  name: string
  slug: string | null
  cover: queryGames_games_cover | null
  developers: (queryGames_games_developers | null)[]
  price: number
}

export interface queryGames {
  games: (queryGames_games | null)[]
}

export interface queryGamesVariables {
  pagination?: PaginationArg | null
}
