import breakpoints from '@/utils/tests/breakpoints'
import styled, { css } from 'styled-components'
import { DefaultBreakpoints } from 'styled-media-query'

type breakpointKeys = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpointKeys
  greaterThan?: breakpointKeys
}

const mediaMatchModifiers = {
  lessThan: (size: breakpointKeys) => css`
    @media (max-width: ${breakpoints[size]}) {
      display: block;
    }
  `,
  greaterThan: (size: breakpointKeys) => css`
    @media (min-width: ${breakpoints[size]}) {
      display: block;
    }
  `
}

export default styled.div.withConfig({
  shouldForwardProp: (prop) => !['lessThan', 'greaterThan'].includes(prop)
})<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
