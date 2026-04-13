import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

type BaseProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: React.ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
  }

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

const Button: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props, ref) => {
  const {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    as = 'button'
  } = props

  if (as === 'a') {
    const anchorProps = props as ButtonAsAnchor

    return (
      <S.WrapperAnchor
        size={size}
        fullWidth={fullWidth}
        hasIcon={!!icon}
        minimal={minimal}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...anchorProps}
      >
        {!!icon && icon}
        {!!children && <span>{children}</span>}
      </S.WrapperAnchor>
    )
  }

  const buttonProps = props as ButtonAsButton

  return (
    <S.WrapperButton
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...buttonProps}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.WrapperButton>
  )
}

export default forwardRef(Button)
