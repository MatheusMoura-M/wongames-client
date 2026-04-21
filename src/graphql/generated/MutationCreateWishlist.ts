/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { WishlistInput } from './globalTypes'

// ====================================================
// GraphQL mutation operation: MutationCreateWishlist
// ====================================================

export interface MutationCreateWishlist_createWishlist_games_cover {
  __typename: 'UploadFile'
  url: string
}

export interface MutationCreateWishlist_createWishlist_games_developers {
  __typename: 'Developer'
  name: string
}

export interface MutationCreateWishlist_createWishlist_games {
  __typename: 'Game'
  documentId: string
  name: string
  slug: string
  cover: MutationCreateWishlist_createWishlist_games_cover | null
  developers: (MutationCreateWishlist_createWishlist_games_developers | null)[]
  price: number
}

export interface MutationCreateWishlist_createWishlist {
  __typename: 'Wishlist'
  documentId: string
  games: (MutationCreateWishlist_createWishlist_games | null)[]
}

export interface MutationCreateWishlist {
  createWishlist: MutationCreateWishlist_createWishlist | null
}

export interface MutationCreateWishlistVariables {
  data: WishlistInput
}
