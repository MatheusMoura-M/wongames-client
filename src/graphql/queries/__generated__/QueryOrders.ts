import type * as Types from '../../generated-test/types'

import type { GameFragmentFragment } from '../../fragments/__generated__/GameFragment'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type QueryOrdersQuery_orders_Order_games_Game = {
  __typename: 'Game'
} & GameFragmentFragment

export type QueryOrdersQuery_orders_Order = {
  __typename: 'Order'
  documentId: string
  createdAt: any | null
  card_brand: string | null
  card_last4: string | null
  games: Array<QueryOrdersQuery_orders_Order_games_Game | null>
}

export type QueryOrdersQuery_Query = {
  __typename: 'Query'
  orders: Array<QueryOrdersQuery_orders_Order | null>
}

export type QueryOrdersQueryVariables = Types.Exact<{
  identifier: Types.Scalars['ID']['input']
}>

export type QueryOrdersQuery = QueryOrdersQuery_Query

export const QueryOrdersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryOrders' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'identifier' }
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
            name: { kind: 'Name', value: 'orders' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'user' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'documentId' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'identifier' }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'card_brand' } },
                { kind: 'Field', name: { kind: 'Name', value: 'card_last4' } },
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
} as unknown as DocumentNode<QueryOrdersQuery, QueryOrdersQueryVariables>
