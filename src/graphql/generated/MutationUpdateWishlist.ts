/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { WishlistInput } from './globalTypes'

// ====================================================
// GraphQL mutation operation: MutationUpdateWishlist
// ====================================================

export interface MutationUpdateWishlist_updateWishlist_games_cover {
  __typename: 'UploadFile'
  url: string
}

export interface MutationUpdateWishlist_updateWishlist_games_developers {
  __typename: 'Developer'
  name: string
}

export interface MutationUpdateWishlist_updateWishlist_games {
  __typename: 'Game'
  documentId: string
  name: string
  slug: string
  cover: MutationUpdateWishlist_updateWishlist_games_cover | null
  developers: (MutationUpdateWishlist_updateWishlist_games_developers | null)[]
  price: number
}

export interface MutationUpdateWishlist_updateWishlist {
  __typename: 'Wishlist'
  documentId: string
  games: (MutationUpdateWishlist_updateWishlist_games | null)[]
}

export interface MutationUpdateWishlist {
  updateWishlist: MutationUpdateWishlist_updateWishlist | null
}

export interface MutationUpdateWishlistVariables {
  documentId: string
  data: WishlistInput
}
