/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GameFragment
// ====================================================

export interface GameFragment_cover {
  __typename: 'UploadFile'
  url: string
}

export interface GameFragment_developers {
  __typename: 'Developer'
  name: string
}

export interface GameFragment {
  __typename: 'Game'
  name: string
  slug: string | null
  cover: GameFragment_cover | null
  developers: (GameFragment_developers | null)[]
  price: number
}
