import { GameFragment } from '@/graphql/fragments/game'
import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import {
  QueryWishlistDocument,
  QueryWishlistQuery,
  QueryWishlistQueryVariables
} from './__generated__/QueryWishlist'

export const QUERY_WISHLIST = gql`
  query QueryWishlist($identifier: String!) {
    wishlists(filters: { user: { email: { eq: $identifier } } }) {
      documentId
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`

export function useQueryWishlist(
  options?: QueryHookOptions<QueryWishlistQuery, QueryWishlistQueryVariables>
) {
  return useQuery(QueryWishlistDocument, options)
}
