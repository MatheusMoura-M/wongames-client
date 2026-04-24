import type * as Types from '../../generated-test/types.generated'

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
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
  rating: Types.ENUM_GAME_RATING | null
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
