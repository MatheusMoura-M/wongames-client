import {
  CartContext,
  CartContextData,
  CartContextDefaultValues
} from '@/hooks/use-cart'
import {
  WishlistContext,
  WishlistContextData,
  WishlistContextDefaultValues
} from '@/hooks/use-wishlist'
import theme from '@/styles/theme'
import { render, RenderOptions } from '@testing-library/react'
import { SessionProvider } from 'next-auth/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

type CustomRenderProps = {
  cartProviderProps?: CartContextData
  wishlistProviderProps?: WishlistContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = CartContextDefaultValues,
    wishlistProviderProps = WishlistContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <SessionProvider session={null}>
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={cartProviderProps}>
          <WishlistContext.Provider value={wishlistProviderProps}>
            {ui}
          </WishlistContext.Provider>
        </CartContext.Provider>
      </ThemeProvider>
    </SessionProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
