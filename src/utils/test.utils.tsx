import {
  CartContext,
  CartContextData,
  CartContextDefaultValues
} from '@/hooks/use-cart'
import theme from '@/styles/theme'
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'

type CustomRenderProps = {
  cartProviderProps?: CartContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = CartContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <SessionProvider session={null}>
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={cartProviderProps}>
          {ui}
        </CartContext.Provider>
      </ThemeProvider>
    </SessionProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
