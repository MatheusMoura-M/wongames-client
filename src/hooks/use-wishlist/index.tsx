import { GameCardProps } from '@/components/GameCard'
import { MutationCreateWishlistDocument } from '@/graphql/mutations/__generated__/MutationCreateWishlist'
import { MutationUpdateWishlistDocument } from '@/graphql/mutations/__generated__/MutationUpdateWishlist'
import { QueryWishlistQuery_wishlists_Wishlist } from '@/graphql/queries/__generated__/QueryWishlist'
import { useQueryWishlist } from '@/graphql/queries/wishlist'
import { isGame } from '@/utils/filterByTypes'
import { gamesMapper } from '@/utils/mappers'
import { useMutation } from '@apollo/client'
import { useSession } from 'next-auth/react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

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

  const [wishlistId, setWishlistId] = useState<string | null>()
  const [wishlistItems, setWishlistItems] = useState<
    NonNullable<QueryWishlistQuery_wishlists_Wishlist['games'][number]>[]
  >([])

  const [createList, { loading: loadingCreate }] = useMutation(
    MutationCreateWishlistDocument,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems((data?.createWishlist?.games || []).filter(isGame))
        setWishlistId(data?.createWishlist?.documentId)
      }
    }
  )

  const [updateList, { loading: loadingUpdate }] = useMutation(
    MutationUpdateWishlistDocument,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems((data?.updateWishlist?.games || []).filter(isGame))
      }
    }
  )

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  useEffect(() => {
    setWishlistItems((data?.wishlists[0]?.games || []).filter(isGame))
    setWishlistId(data?.wishlists[0]?.documentId)
  }, [data])

  const wishlistIds = useMemo(
    () => wishlistItems.map((game) => game.documentId),
    [wishlistItems]
  )

  const isInWishlist = (documentId: string) =>
    !!wishlistItems.find((game) => game.documentId === documentId)

  const addToWishlist = (documentId: string) => {
    // se não existir wishlist - cria
    if (!wishlistId) {
      return createList({
        variables: { data: { games: [...wishlistIds, documentId] } }
      })
    }

    // // senão atualiza a wishlist existente
    return updateList({
      variables: {
        documentId: wishlistId,
        data: { games: [...wishlistIds, documentId] }
      }
    })
  }

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
