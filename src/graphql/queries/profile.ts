import { gql } from '@apollo/client'

export const QUERY_PROFILE_ME = gql`
  query QueryProfileMe($documentId: ID!) {
    usersPermissionsUser(documentId: $documentId) {
      documentId
      username
      email
    }
  }
`
