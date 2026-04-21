import { GameFragment } from '@/graphql/fragments/game'
import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import {
  QueryWishlist,
  QueryWishlistVariables
} from '../generated/QueryWishlist'

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
  options?: QueryHookOptions<QueryWishlist, QueryWishlistVariables>
) {
  return useQuery<QueryWishlist, QueryWishlistVariables>(
    QUERY_WISHLIST,
    options
  )
}
