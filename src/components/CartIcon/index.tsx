import { useCart } from '@/hooks/use-cart'
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import { useEffect, useState } from 'react'
import * as S from './styles'

const CartIcon = () => {
  const { quantity } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  return (
    <S.Wrapper>
      {mounted && quantity > 0 && (
        <S.Badge aria-label="Cart Items">{quantity}</S.Badge>
      )}

      <ShoppingCart aria-label="Shopping Cart" />
    </S.Wrapper>
  )
}

export default CartIcon
