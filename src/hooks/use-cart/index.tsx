import { QueryGames_games } from '@/graphql/generated/queryGames'
import { useQueryGames } from '@/graphql/queries/games'
import formatPrice from '@/utils/format-price'
import { getStorageItem, setStorageItem } from '@/utils/localStorage'
import { cartMapper } from '@/utils/mappers'
import { createContext, useContext, useState } from 'react'

const CART_KEY = 'cartItems'

type CartItem = {
  documentId: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[] | []
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  loading: boolean
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>(() => {
    const data = getStorageItem(CART_KEY)
    return data || []
  })

  const { data, loading } = useQueryGames({
    skip: !cartItems.length,
    variables: {
      filters: {
        documentId: { in: cartItems }
      }
    }
  })

  const total = (data?.games ?? [])
    .filter((game): game is QueryGames_games => Boolean(game))
    .reduce((acc, game) => {
      return acc + game.price
    }, 0)

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const saveCart = (newCartItems: string[]) => {
    setCartItems(newCartItems)
    setStorageItem(CART_KEY, newCartItems)
  }

  const addToCart = (id: string) => {
    if (isInCart(id)) return

    saveCart([...cartItems, id])
  }

  const removeFromCart = (id: string) => {
    if (!isInCart(id)) return

    const newCartItems = cartItems.filter((itemId: string) => itemId !== id)

    saveCart(newCartItems)
  }

  const clearCart = () => saveCart([])

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
