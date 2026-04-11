import { useContext, createContext, useState, useEffect } from 'react'
import { getStorageItem } from '@/utils/localStorage'
import { useQueryGames } from '@/graphql/queries/games'
import formatPrice from '@/utils/format-price'

const CART_KEY = 'cartItems'

type CartItem = {
  documentId: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
}

export const CartContextDefaultValues = {
  items: []
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

  const { data } = useQueryGames({
    skip: !cartItems.length,
    variables: {
      filters: {
        documentId: { in: cartItems }
      }
    }
  })

  return (
    <CartContext.Provider
      value={{
        items: data?.games.map((game) => ({
          documentId: game?.documentId,
          img: `http://localhost:1337${game?.cover?.url}`,
          price: game?.price ? formatPrice(game.price) : 0,
          title: game?.name
        }))
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
