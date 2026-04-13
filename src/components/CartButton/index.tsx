import { useCart } from '@/hooks/use-cart'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { RemoveShoppingCart } from '@styled-icons/material-outlined/RemoveShoppingCart'
import Button from '../Button'

type CartButtonProps = {
  documentId: string
}

const CartButton = ({ documentId }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  return (
    <Button
      icon={
        isInCart(documentId) ? (
          <RemoveShoppingCart aria-label="Remove from cart" />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      size="small"
      onClick={() =>
        isInCart(documentId)
          ? removeFromCart(documentId)
          : addToCart(documentId)
      }
    />
  )
}

export default CartButton
