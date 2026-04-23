import type * as Types from '../../generated-test/types.generated'

import type { GameFragmentFragment } from '../../fragments/__generated__/game.generated'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type QueryGamesQuery_games_Game = {
  __typename: 'Game'
} & GameFragmentFragment

export type QueryGamesQuery_games_connection_GameEntityResponseCollection_pageInfo_Pagination =
  {
    __typename: 'Pagination'
    total: number
  }

export type QueryGamesQuery_games_connection_GameEntityResponseCollection = {
  __typename: 'GameEntityResponseCollection'
  pageInfo: QueryGamesQuery_games_connection_GameEntityResponseCollection_pageInfo_Pagination
}

export type QueryGamesQuery_Query = {
  __typename: 'Query'
  games: Array<QueryGamesQuery_games_Game | null>
  games_connection: QueryGamesQuery_games_connection_GameEntityResponseCollection | null
}

export type QueryGamesQueryVariables = Types.Exact<{
  pagination?: Types.InputMaybe<Types.PaginationArg>
  filters?: Types.InputMaybe<Types.GameFiltersInput>
  sort?: Types.InputMaybe<
    | Array<Types.InputMaybe<Types.Scalars['String']['input']>>
    | Types.InputMaybe<Types.Scalars['String']['input']>
  >
}>

export type QueryGamesQuery = QueryGamesQuery_Query

export type QueryGameBySlugQuery_games_Game_gallery_UploadFile = {
  __typename: 'UploadFile'
  src: string
  label: string | null
}

export type QueryGameBySlugQuery_games_Game_cover_UploadFile = {
  __typename: 'UploadFile'
  src: string
}

export type QueryGameBySlugQuery_games_Game_developers_Developer = {
  __typename: 'Developer'
  name: string
}

export type QueryGameBySlugQuery_games_Game_publisher_Publisher = {
  __typename: 'Publisher'
  name: string
}

export type QueryGameBySlugQuery_games_Game_categories_Category = {
  __typename: 'Category'
  name: string
}

export type QueryGameBySlugQuery_games_Game_platforms_Platform = {
  __typename: 'Platform'
  name: string
}

export type QueryGameBySlugQuery_games_Game = {
  __typename: 'Game'
  documentId: string
  name: string
  description: string | null
  short_description: string | null
  price: number
  rating: Types.Enum_Game_Rating | null
  release_date: any | null
  gallery: Array<QueryGameBySlugQuery_games_Game_gallery_UploadFile | null>
  cover: QueryGameBySlugQuery_games_Game_cover_UploadFile | null
  developers: Array<QueryGameBySlugQuery_games_Game_developers_Developer | null>
  publisher: QueryGameBySlugQuery_games_Game_publisher_Publisher | null
  categories: Array<QueryGameBySlugQuery_games_Game_categories_Category | null>
  platforms: Array<QueryGameBySlugQuery_games_Game_platforms_Platform | null>
}

export type QueryGameBySlugQuery_Query = {
  __typename: 'Query'
  games: Array<QueryGameBySlugQuery_games_Game | null>
}

export type QueryGameBySlugQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<Types.GameFiltersInput>
}>

export type QueryGameBySlugQuery = QueryGameBySlugQuery_Query

export const QueryGamesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryGames' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' }
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'PaginationArg' }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filters' }
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'GameFiltersInput' }
          }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: {
            kind: 'ListType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'games' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' }
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filters' }
                }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sort' }
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
            name: { kind: 'Name', value: 'games_connection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filters' }
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'total' } }
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
} as unknown as DocumentNode<QueryGamesQuery, QueryGamesQueryVariables>
export const QueryGameBySlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'QueryGameBySlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filters' }
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'GameFiltersInput' }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'games' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filters' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filters' }
                }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'documentId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'short_description' }
                },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'release_date' }
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'gallery' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'src' },
                        name: { kind: 'Name', value: 'url' }
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'label' },
                        name: { kind: 'Name', value: 'alternativeText' }
                      }
                    ]
                  }
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cover' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'src' },
                        name: { kind: 'Name', value: 'url' }
                      }
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publisher' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } }
                    ]
                  }
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'categories' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } }
                    ]
                  }
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'platforms' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } }
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
} as unknown as DocumentNode<
  QueryGameBySlugQuery,
  QueryGameBySlugQueryVariables
>
