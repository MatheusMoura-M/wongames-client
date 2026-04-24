import type * as Types from '../../generated-test/types.generated'

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type BannerFragmentFragment_Banner_image_UploadFile = {
  __typename: 'UploadFile'
  url: string
}

export type BannerFragmentFragment_Banner_button_ComponentPageButton = {
  __typename: 'ComponentPageButton'
  label: string
  link: string
}

export type BannerFragmentFragment_Banner_ribbon_ComponentPageRibbon = {
  __typename: 'ComponentPageRibbon'
  text: string | null
  color: Types.ENUM_COMPONENTPAGERIBBON_COLOR | null
  size: Types.ENUM_COMPONENTPAGERIBBON_SIZE | null
}

export type BannerFragmentFragment = {
  __typename: 'Banner'
  title: string
  subtitle: string
  image: BannerFragmentFragment_Banner_image_UploadFile
  button: BannerFragmentFragment_Banner_button_ComponentPageButton | null
  ribbon: BannerFragmentFragment_Banner_ribbon_ComponentPageRibbon | null
}

export const BannerFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
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
    }
  ]
} as unknown as DocumentNode<BannerFragmentFragment, unknown>
