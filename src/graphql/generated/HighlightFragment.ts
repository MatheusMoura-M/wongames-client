/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './globalTypes'

// ====================================================
// GraphQL fragment: HighlightFragment
// ====================================================

export interface HighlightFragment_background {
  __typename: 'UploadFile'
  url: string
}

export interface HighlightFragment_floatImage {
  __typename: 'UploadFile'
  url: string
}

export interface HighlightFragment {
  __typename: 'ComponentPageHighlight'
  title: string
  subtitle: string
  background: HighlightFragment_background
  floatImage: HighlightFragment_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}
