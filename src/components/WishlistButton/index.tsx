import { useWishlist } from '@/hooks/use-wishlist'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Button, { ButtonProps } from '../Button'
import Spinner from '../Spinner'

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

  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    try {
      setLoading(true)

      isInWishlist(documentId)
        ? await removeFromWishlist(documentId)
        : await addToWishlist(documentId)
    } catch (error) {
      console.error('ERROR HANDLE_CLICK WISHLIST: ', error)
    } finally {
      setLoading(false)
    }
  }

  const ButtonText = isInWishlist(documentId)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  if (!session) return null

  return (
    <Button
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(documentId) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      size={size}
      onClick={handleClick}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
