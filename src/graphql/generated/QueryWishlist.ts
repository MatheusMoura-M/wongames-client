/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryWishlist
// ====================================================

export interface QueryWishlist_wishlists_games_cover {
  __typename: 'UploadFile'
  url: string
}

export interface QueryWishlist_wishlists_games_developers {
  __typename: 'Developer'
  name: string
}

export interface QueryWishlist_wishlists_games {
  __typename: 'Game'
  documentId: string
  name: string
  slug: string
  cover: QueryWishlist_wishlists_games_cover | null
  developers: (QueryWishlist_wishlists_games_developers | null)[]
  price: number
}

export interface QueryWishlist_wishlists {
  __typename: 'Wishlist'
  documentId: string
  games: (QueryWishlist_wishlists_games | null)[]
}

export interface QueryWishlist {
  wishlists: (QueryWishlist_wishlists | null)[]
}

export interface QueryWishlistVariables {
  identifier: string
}
