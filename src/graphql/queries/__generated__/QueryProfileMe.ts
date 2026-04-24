import type * as Types from '../../generated-test/types'

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type QueryProfileMeQuery_me_UsersPermissionsMe = {
  __typename: 'UsersPermissionsMe'
  username: string
  email: string | null
}

export type QueryProfileMeQuery_Query = {
  __typename: 'Query'
  me: QueryProfileMeQuery_me_UsersPermissionsMe | null
}

export type QueryProfileMeQueryVariables = Types.Exact<{ [key: string]: never }>

export type QueryProfileMeQuery = QueryProfileMeQuery_Query

export const QueryProfileMeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryProfileMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<QueryProfileMeQuery, QueryProfileMeQueryVariables>
