import { GameCardProps } from '@/components/GameCard'
import { QueryWishlistQuery_wishlists_Wishlist } from '@/graphql/queries/__generated__/QueryWishlist'
import { useQueryWishlist } from '@/graphql/queries/wishlist'
import { isGame } from '@/utils/filterByTypes'
import { gamesMapper } from '@/utils/mappers'
import { useSession } from 'next-auth/react'
import { createContext, useContext, useEffect, useState } from 'react'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const { data: session } = useSession()
  const [wishlistItems, setWishlistItems] = useState<
    NonNullable<QueryWishlistQuery_wishlists_Wishlist['games'][number]>[]
  >([])

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  useEffect(() => {
    setWishlistItems((data?.wishlists[0]?.games || []).filter(isGame))
  }, [data])

  const isInWishlist = (documentId: string) =>
    !!wishlistItems.find((game) => game.documentId === documentId)

  const addToWishlist = (documentId: string) => {}
  const removeFromWishlist = (documentId: string) => {}

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { useWishlist, WishlistProvider }
