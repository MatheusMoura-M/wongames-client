/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './globalTypes'

// ====================================================
// GraphQL query operation: QueryRecommended
// ====================================================

export interface QueryRecommended_recommended_section_highlight_background {
  __typename: 'UploadFile'
  url: string
}

export interface QueryRecommended_recommended_section_highlight_floatImage {
  __typename: 'UploadFile'
  url: string
}

export interface QueryRecommended_recommended_section_highlight {
  __typename: 'ComponentPageHighlight'
  title: string
  subtitle: string
  background: QueryRecommended_recommended_section_highlight_background
  floatImage: QueryRecommended_recommended_section_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface QueryRecommended_recommended_section_games_cover {
  __typename: 'UploadFile'
  url: string
}

export interface QueryRecommended_recommended_section_games_developers {
  __typename: 'Developer'
  name: string
}

export interface QueryRecommended_recommended_section_games {
  __typename: 'Game'
  documentId: string
  name: string
  slug: string | null
  cover: QueryRecommended_recommended_section_games_cover | null
  developers: (QueryRecommended_recommended_section_games_developers | null)[]
  price: number
}

export interface QueryRecommended_recommended_section {
  __typename: 'ComponentPagePopularGames'
  title: string
  highlight: QueryRecommended_recommended_section_highlight | null
  games: (QueryRecommended_recommended_section_games | null)[]
}

export interface QueryRecommended_recommended {
  __typename: 'Recommended'
  section: QueryRecommended_recommended_section
}

export interface QueryRecommended {
  recommended: QueryRecommended_recommended | null
}
