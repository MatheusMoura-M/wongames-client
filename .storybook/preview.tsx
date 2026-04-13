import { CartContext, CartContextDefaultValues } from '@/hooks/use-cart'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import type { Decorator, Parameters, Preview } from '@storybook/nextjs-vite'
import { ThemeProvider } from 'styled-components'

const parameters: Parameters = {
  backgrounds: {
    options: {
      light: { name: 'won-light', value: theme.colors.white },
      dark: { name: 'won-dark', value: theme.colors.mainBg }
    }
  },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i
    }
  },

  a11y: {
    // 'todo' - show a11y violations in the test UI only
    // 'error' - fail CI on a11y violations
    // 'off' - skip a11y checks entirely
    test: 'todo'
  }
}

const decorators: Decorator[] = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider
        value={{
          ...CartContextDefaultValues,
          ...(context?.args?.cartContextValue || {}),
          ...context.args
        }}
      >
        <GlobalStyles removeBg />
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  )
]

const preview: Preview = {
  parameters: parameters,
  decorators: decorators,
  initialGlobals: {
    backgrounds: { value: 'light' }
  }
}

export default preview
