import type * as Types from '../../generated-test/types'

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type QueryProfileMeQuery_usersPermissionsUser_UsersPermissionsUser = {
  __typename: 'UsersPermissionsUser'
  documentId: string
  username: string
  email: string
}

export type QueryProfileMeQuery_Query = {
  __typename: 'Query'
  usersPermissionsUser: QueryProfileMeQuery_usersPermissionsUser_UsersPermissionsUser | null
}

export type QueryProfileMeQueryVariables = Types.Exact<{
  documentId: Types.Scalars['ID']['input']
}>

export type QueryProfileMeQuery = QueryProfileMeQuery_Query

export const QueryProfileMeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryProfileMe' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'documentId' }
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'usersPermissionsUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'documentId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'documentId' }
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
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
