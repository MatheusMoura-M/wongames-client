import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    @media (max-width: 768px) {
      width: 5.8rem;
      height: 4.5rem;
      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    }
  `
}

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'hideOnMobile'
})<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
