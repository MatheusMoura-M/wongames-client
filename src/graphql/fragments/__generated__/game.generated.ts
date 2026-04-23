import type * as Types from '../../generated-test/types.generated'

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type GameFragmentFragment_Game_cover_UploadFile = {
  __typename: 'UploadFile'
  url: string
}

export type GameFragmentFragment_Game_developers_Developer = {
  __typename: 'Developer'
  name: string
}

export type GameFragmentFragment = {
  __typename: 'Game'
  documentId: string
  name: string
  slug: string
  price: number
  cover: GameFragmentFragment_Game_cover_UploadFile | null
  developers: Array<GameFragmentFragment_Game_developers_Developer | null>
}

export const GameFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
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
} as unknown as DocumentNode<GameFragmentFragment, unknown>
