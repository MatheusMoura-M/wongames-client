import type * as Types from '../../generated-test/types.generated'

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type HighlightFragmentFragment_ComponentPageHighlight_background_UploadFile =
  {
    __typename: 'UploadFile'
    url: string
  }

export type HighlightFragmentFragment_ComponentPageHighlight_floatImage_UploadFile =
  {
    __typename: 'UploadFile'
    url: string
  }

export type HighlightFragmentFragment = {
  __typename: 'ComponentPageHighlight'
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  alignment: Types.Enum_Componentpagehighlight_Alignment | null
  background: HighlightFragmentFragment_ComponentPageHighlight_background_UploadFile
  floatImage: HighlightFragmentFragment_ComponentPageHighlight_floatImage_UploadFile | null
}

export const HighlightFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
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
} as unknown as DocumentNode<HighlightFragmentFragment, unknown>
