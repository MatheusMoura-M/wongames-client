import type * as Types from '../../generated-test/types.generated'

import type { HighlightFragmentFragment } from '../../fragments/__generated__/HighlightFragment.generated'
import type { GameFragmentFragment } from '../../fragments/__generated__/GameFragment.generated'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type QueryRecommendedQuery_recommended_Recommended_section_ComponentPagePopularGames_highlight_ComponentPageHighlight =
  {
    __typename: 'ComponentPageHighlight'
  } & HighlightFragmentFragment

export type QueryRecommendedQuery_recommended_Recommended_section_ComponentPagePopularGames_games_Game =
  {
    __typename: 'Game'
  } & GameFragmentFragment

export type QueryRecommendedQuery_recommended_Recommended_section_ComponentPagePopularGames =
  {
    __typename: 'ComponentPagePopularGames'
    title: string
    highlight: QueryRecommendedQuery_recommended_Recommended_section_ComponentPagePopularGames_highlight_ComponentPageHighlight | null
    games: Array<QueryRecommendedQuery_recommended_Recommended_section_ComponentPagePopularGames_games_Game | null>
  }

export type QueryRecommendedQuery_recommended_Recommended = {
  __typename: 'Recommended'
  section: QueryRecommendedQuery_recommended_Recommended_section_ComponentPagePopularGames
}

export type QueryRecommendedQuery_Query = {
  __typename: 'Query'
  recommended: QueryRecommendedQuery_recommended_Recommended | null
}

export type QueryRecommendedQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type QueryRecommendedQuery = QueryRecommendedQuery_Query

export const QueryRecommendedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryRecommended' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'recommended' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'section' },
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
                      },
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
          }
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
  QueryRecommendedQuery,
  QueryRecommendedQueryVariables
>
