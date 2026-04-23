import type * as Types from '../../generated-test/types.generated'

import type { BannerFragmentFragment } from '../../fragments/__generated__/banner.generated'
import type { GameFragmentFragment } from '../../fragments/__generated__/game.generated'
import type { HighlightFragmentFragment } from '../../fragments/__generated__/highlight.generated'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type QueryHomeQuery_banners_Banner = {
  __typename: 'Banner'
} & BannerFragmentFragment

export type QueryHomeQuery_newGames_Game = {
  __typename: 'Game'
} & GameFragmentFragment

export type QueryHomeQuery_upcomingGames_Game = {
  __typename: 'Game'
} & GameFragmentFragment

export type QueryHomeQuery_freeGames_Game = {
  __typename: 'Game'
} & GameFragmentFragment

export type QueryHomeQuery_sections_Home_newGames_ComponentPageSection_highlight_ComponentPageHighlight =
  {
    __typename: 'ComponentPageHighlight'
  } & HighlightFragmentFragment

export type QueryHomeQuery_sections_Home_newGames_ComponentPageSection = {
  __typename: 'ComponentPageSection'
  title: string | null
  highlight: QueryHomeQuery_sections_Home_newGames_ComponentPageSection_highlight_ComponentPageHighlight | null
}

export type QueryHomeQuery_sections_Home_popularGames_ComponentPagePopularGames_highlight_ComponentPageHighlight =
  {
    __typename: 'ComponentPageHighlight'
  } & HighlightFragmentFragment

export type QueryHomeQuery_sections_Home_popularGames_ComponentPagePopularGames_games_Game =
  {
    __typename: 'Game'
  } & GameFragmentFragment

export type QueryHomeQuery_sections_Home_popularGames_ComponentPagePopularGames =
  {
    __typename: 'ComponentPagePopularGames'
    title: string
    highlight: QueryHomeQuery_sections_Home_popularGames_ComponentPagePopularGames_highlight_ComponentPageHighlight | null
    games: Array<QueryHomeQuery_sections_Home_popularGames_ComponentPagePopularGames_games_Game | null>
  }

export type QueryHomeQuery_sections_Home_upcomingGames_ComponentPageSection_highlight_ComponentPageHighlight =
  {
    __typename: 'ComponentPageHighlight'
  } & HighlightFragmentFragment

export type QueryHomeQuery_sections_Home_upcomingGames_ComponentPageSection = {
  __typename: 'ComponentPageSection'
  title: string | null
  highlight: QueryHomeQuery_sections_Home_upcomingGames_ComponentPageSection_highlight_ComponentPageHighlight | null
}

export type QueryHomeQuery_sections_Home_freeGames_ComponentPageSection_highlight_ComponentPageHighlight =
  {
    __typename: 'ComponentPageHighlight'
  } & HighlightFragmentFragment

export type QueryHomeQuery_sections_Home_freeGames_ComponentPageSection = {
  __typename: 'ComponentPageSection'
  title: string | null
  highlight: QueryHomeQuery_sections_Home_freeGames_ComponentPageSection_highlight_ComponentPageHighlight | null
}

export type QueryHomeQuery_sections_Home = {
  __typename: 'Home'
  newGames: QueryHomeQuery_sections_Home_newGames_ComponentPageSection | null
  popularGames: QueryHomeQuery_sections_Home_popularGames_ComponentPagePopularGames | null
  upcomingGames: QueryHomeQuery_sections_Home_upcomingGames_ComponentPageSection | null
  freeGames: QueryHomeQuery_sections_Home_freeGames_ComponentPageSection | null
}

export type QueryHomeQuery_Query = {
  __typename: 'Query'
  banners: Array<QueryHomeQuery_banners_Banner | null>
  newGames: Array<QueryHomeQuery_newGames_Game | null>
  upcomingGames: Array<QueryHomeQuery_upcomingGames_Game | null>
  freeGames: Array<QueryHomeQuery_freeGames_Game | null>
  sections: QueryHomeQuery_sections_Home | null
}

export type QueryHomeQueryVariables = Types.Exact<{
  date: Types.Scalars['Date']['input']
}>

export type QueryHomeQuery = QueryHomeQuery_Query

export const QueryHomeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryHome' },
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
            name: { kind: 'Name', value: 'banners' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BannerFragment' }
                }
              ]
            }
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'newGames' },
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
                            name: { kind: 'Name', value: 'lte' },
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
                  value: 'release_date:desc',
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
            alias: { kind: 'Name', value: 'freeGames' },
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
                      name: { kind: 'Name', value: 'price' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'IntValue', value: '0' }
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
                  value: 'release_date:desc',
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
            alias: { kind: 'Name', value: 'sections' },
            name: { kind: 'Name', value: 'home' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'newGames' },
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
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'popularGames' },
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
                        arguments: [
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
                      }
                    ]
                  }
                },
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
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'freeGames' },
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
      name: { kind: 'Name', value: 'BannerFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Banner' }
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } }
              ]
            }
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'button' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                { kind: 'Field', name: { kind: 'Name', value: 'link' } }
              ]
            }
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ribbon' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                { kind: 'Field', name: { kind: 'Name', value: 'size' } }
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
} as unknown as DocumentNode<QueryHomeQuery, QueryHomeQueryVariables>
