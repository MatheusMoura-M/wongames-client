import { gql } from '@apollo/client'
import { GameFragment } from '@/graphql/fragments/game'

export const QUERY_ORDERS = gql`
  query QueryOrders($identifier: ID!) {
    orders(filters: { user: { documentId: { eq: $identifier } } }) {
      documentId
      createdAt
      card_brand
      card_last4
      games {
        ...GameFragment
      }
    }
  }

  ${GameFragment}
`
