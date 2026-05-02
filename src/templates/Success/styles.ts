import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0 calc(${theme.spacings.xxlarge} * 3);
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    text-align: center;
  `}
`

export const BoxCheckMark = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.large};
    gap: ${theme.spacings.xlarge};
  `}
`

export const LineHorinzontal = styled.div`
  ${({ theme }) => css`
    width: 317px;
    height: 2px;
    background: ${theme.colors.primary};
  `}
`

export const CheckMark = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    border-radius: 100%;
    box-shadow: 0 0 0 10px ${theme.colors.primary}33;

    svg {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
      border-radius: 50%;
      padding: 1rem;
      width: 8rem;
    }
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    max-width: 60rem;
    margin: auto;

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  `}
`
