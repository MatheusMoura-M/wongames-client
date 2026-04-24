import type * as Types from '../../generated-test/types.generated'

import type { GameFragmentFragment } from '../../fragments/__generated__/GameFragment.generated'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type MutationUpdateWishlistMutation_updateWishlist_Wishlist_games_Game =
  {
    __typename: 'Game'
  } & GameFragmentFragment

export type MutationUpdateWishlistMutation_updateWishlist_Wishlist = {
  __typename: 'Wishlist'
  documentId: string
  games: Array<MutationUpdateWishlistMutation_updateWishlist_Wishlist_games_Game | null>
}

export type MutationUpdateWishlistMutation_Mutation = {
  __typename: 'Mutation'
  updateWishlist: MutationUpdateWishlistMutation_updateWishlist_Wishlist | null
}

export type MutationUpdateWishlistMutationVariables = Types.Exact<{
  documentId: Types.Scalars['ID']['input']
  data: Types.WishlistInput
}>

export type MutationUpdateWishlistMutation =
  MutationUpdateWishlistMutation_Mutation

export const MutationUpdateWishlistDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MutationUpdateWishlist' },
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
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'WishlistInput' }
            }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateWishlist' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'documentId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'documentId' }
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'data' }
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'games' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'GameFragment' }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GameFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Game' }
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cover' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } }
              ]
            }
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'developers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } }
              ]
            }
          },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode<
  MutationUpdateWishlistMutation,
  MutationUpdateWishlistMutationVariables
>
