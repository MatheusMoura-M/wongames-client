import { useWishlist } from '@/hooks/use-wishlist'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { useSession } from 'next-auth/react'
import Button, { ButtonProps } from '../Button'

type WishlistButtonProps = {
  documentId: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  documentId,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const { data: session } = useSession()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const ButtonText = isInWishlist(documentId)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  if (!session) return null

  return (
    <Button
      icon={
        isInWishlist(documentId) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
