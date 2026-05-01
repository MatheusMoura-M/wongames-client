import { GameCardProps } from '@/components/GameCard'
import {
  MutationCreateWishlistDocument,
  MutationCreateWishlistMutation_Mutation
} from '@/graphql/mutations/__generated__/MutationCreateWishlist'
import {
  MutationUpdateWishlistDocument,
  MutationUpdateWishlistMutation_Mutation
} from '@/graphql/mutations/__generated__/MutationUpdateWishlist'
import { QueryWishlistQuery_wishlists_Wishlist } from '@/graphql/queries/__generated__/QueryWishlist'
import { useQueryWishlist } from '@/graphql/queries/wishlist'
import { isGame } from '@/utils/filterByTypes'
import { gamesMapper } from '@/utils/mappers'
import { FetchResult, useMutation } from '@apollo/client'
import { useSession } from 'next-auth/react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (
    id: string
  ) =>
    | Promise<FetchResult<MutationUpdateWishlistMutation_Mutation>>
    | Promise<FetchResult<MutationCreateWishlistMutation_Mutation>>
    | undefined
  removeFromWishlist: (
    id: string
  ) => Promise<FetchResult<MutationUpdateWishlistMutation_Mutation>> | undefined
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: async () => {
    return {} as FetchResult<MutationUpdateWishlistMutation_Mutation>
  },
  removeFromWishlist: () => undefined,
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

  const [wishlistIdsState, setWishlistIdsState] = useState<string[]>([])
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

  const { data, loading: loadingQuery } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  useEffect(() => {
    const items = (data?.wishlists[0]?.games || []).filter(isGame)

    setWishlistItems(items)
    setWishlistId(data?.wishlists[0]?.documentId)
    setWishlistIdsState(items?.map((g) => g.documentId))
  }, [data])

  const isInWishlist = (documentId: string) =>
    !!wishlistItems.find((game) => game.documentId === documentId)

  const addToWishlist = (documentId: string) => {
    const current = wishlistIdsState

    if (current.includes(documentId)) return

    const updatedIds = [...current, documentId]

    setWishlistIdsState(updatedIds)

    return triggerUpdate(updatedIds)
  }

  const triggerUpdate = (ids: string[]) => {
    // se não existir wishlist - cria
    if (!wishlistId) {
      return createList({
        variables: { data: { games: ids } }
      })
    } else {
      // senão atualiza a wishlist existente
      return updateList({
        variables: {
          documentId: wishlistId,
          data: { games: ids }
        }
      })
    }
  }

  const removeFromWishlist = (documentId: string) => {
    if (!wishlistId) return

    const current = wishlistIdsState

    if (!current.includes(documentId)) return

    const updatedIds = current.filter((gameId: string) => gameId !== documentId)

    setWishlistIdsState(updatedIds)

    return updateList({
      variables: {
        documentId: wishlistId,
        data: { games: updatedIds }
      }
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loadingQuery || loadingCreate || loadingUpdate
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { useWishlist, WishlistProvider }
