'use client'

import { createGlobalStyle, css } from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}
export type GlobalStylePropsWithTheme = GlobalStylesProps

const GlobalStyles = createGlobalStyle<GlobalStylePropsWithTheme>`
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('../fonts/poppins-v21-latin-300.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('../fonts/poppins-v21-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('../fonts/poppins-v21-latin-600.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
    button {
      font-family: ${theme.font.family};
    }
  `}
`

export default GlobalStyles
