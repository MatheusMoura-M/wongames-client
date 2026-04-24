import type * as Types from '../../generated-test/types.generated'

import type { GameFragmentFragment } from '../../fragments/__generated__/GameFragment.generated'
import type { HighlightFragmentFragment } from '../../fragments/__generated__/HighlightFragment.generated'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type QueryUpcomingQuery_upcomingGames_Game = {
  __typename: 'Game'
} & GameFragmentFragment

export type QueryUpcomingQuery_showcase_Home_upcomingGames_ComponentPageSection_highlight_ComponentPageHighlight =
  {
    __typename: 'ComponentPageHighlight'
  } & HighlightFragmentFragment

export type QueryUpcomingQuery_showcase_Home_upcomingGames_ComponentPageSection =
  {
    __typename: 'ComponentPageSection'
    title: string | null
    highlight: QueryUpcomingQuery_showcase_Home_upcomingGames_ComponentPageSection_highlight_ComponentPageHighlight | null
  }

export type QueryUpcomingQuery_showcase_Home = {
  __typename: 'Home'
  upcomingGames: QueryUpcomingQuery_showcase_Home_upcomingGames_ComponentPageSection | null
}

export type QueryUpcomingQuery_Query = {
  __typename: 'Query'
  upcomingGames: Array<QueryUpcomingQuery_upcomingGames_Game | null>
  showcase: QueryUpcomingQuery_showcase_Home | null
}

export type QueryUpcomingQueryVariables = Types.Exact<{
  date: Types.Scalars['Date']['input']
}>

export type QueryUpcomingQuery = QueryUpcomingQuery_Query

export const QueryUpcomingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryUpcoming' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Date' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'upcomingGames' },
            name: { kind: 'Name', value: 'games' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'release_date' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'gt' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'date' }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'StringValue',
                  value: 'release_date:asc',
                  block: false
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '8' }
                    }
                  ]
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GameFragment' }
                }
              ]
            }
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'showcase' },
            name: { kind: 'Name', value: 'home' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'upcomingGames' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'highlight' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'HighlightFragment' }
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
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HighlightFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ComponentPageHighlight' }
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'background' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } }
              ]
            }
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'floatImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } }
              ]
            }
          },
          { kind: 'Field', name: { kind: 'Name', value: 'buttonLabel' } },
          { kind: 'Field', name: { kind: 'Name', value: 'buttonLink' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alignment' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode<QueryUpcomingQuery, QueryUpcomingQueryVariables>
