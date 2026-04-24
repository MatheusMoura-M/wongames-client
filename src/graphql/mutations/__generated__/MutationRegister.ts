import type * as Types from '../../generated-test/types'

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type MutationRegisterMutation_register_UsersPermissionsLoginPayload = {
  __typename: 'UsersPermissionsLoginPayload'
  jwt: string | null
}

export type MutationRegisterMutation_Mutation = {
  __typename: 'Mutation'
  register: MutationRegisterMutation_register_UsersPermissionsLoginPayload
}

export type MutationRegisterMutationVariables = Types.Exact<{
  input: Types.UsersPermissionsRegisterInput
}>

export type MutationRegisterMutation = MutationRegisterMutation_Mutation

export const MutationRegisterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MutationRegister' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UsersPermissionsRegisterInput' }
            }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'register' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' }
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'jwt' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  MutationRegisterMutation,
  MutationRegisterMutationVariables
>
