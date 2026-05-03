import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as GameItemStyles from '@/components/GameItem/styles'

export const Wrapper = styled.div`
  ${GameItemStyles.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`

export const OrdersBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    padding-bottom: ${theme.spacings.xsmall};
  `}
`

export const GamesBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.primary};
  `}
`

export const OrderTitleBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xsmall};

    padding-block: ${theme.spacings.small};
    padding-inline: ${theme.spacings.xsmall};

    ${media.lessThan('large')`
      align-items: flex-start;
      flex-direction: column;
      gap: 4px;
    `}

    &>div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `}
`

export const OrderTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};

    p {
      display: inline-block;
      color: ${theme.colors.darkGray};
    }
  `}
`

export const OrderDate = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Content = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition:
    max-height 0.8s ease,
    opacity 0.7s ease;

  ${({ isOpen }) =>
    isOpen &&
    `
      overflow-y: auto;
  `};
`
