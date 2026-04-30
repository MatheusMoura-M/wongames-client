import { useCart } from '@/hooks/use-cart'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { RemoveShoppingCart } from '@styled-icons/material-outlined/RemoveShoppingCart'
import Button, { ButtonProps } from '../Button'

type CartButtonProps = {
  documentId: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
  documentId,
  size = 'small',
  hasText = false
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  const buttonText = isInCart(documentId) ? 'Remove from cart' : 'Add to cart'

  return (
    <Button
      icon={
        isInCart(documentId) ? (
          <RemoveShoppingCart aria-label="Remove from cart" />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      size={size}
      onClick={() =>
        isInCart(documentId)
          ? removeFromCart(documentId)
          : addToCart(documentId)
      }
    >
      {hasText && buttonText}
    </Button>
  )
}

export default CartButton
