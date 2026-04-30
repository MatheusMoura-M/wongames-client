import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const ForgotPassword = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;

    & > a {
      display: block;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.black};
      text-decoration: none;
      width: fit-content;

      &:hover {
        color: ${lighten(0.2, theme.colors.black)};
      }
    }
  `}
`
