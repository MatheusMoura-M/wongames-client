import { useQueryGames } from '@/graphql/queries/games'
import { getStorageItem } from '@/utils/localStorage'
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
        items: cartMapper(data?.games)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
