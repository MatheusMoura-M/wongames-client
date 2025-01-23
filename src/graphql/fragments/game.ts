import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
    documentId
    name
    slug
    cover {
      url
    }
    developers {
      name
    }
    price
  }
`
