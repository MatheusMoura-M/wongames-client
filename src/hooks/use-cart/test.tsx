import { setStorageItem } from '@/utils/localStorage'
import { MockedProvider } from '@apollo/client/testing'
import { renderHook, waitFor } from '@testing-library/react'
import { CartProvider, CartProviderProps, useCart } from '.'
import { cartItems, gamesMock } from './mock'

describe('useCart', () => {
  it('should return items and its info if there are any in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', [
      'ahef7s9utp83c41ezwfggp45',
      'gk60wzt9lvucsx56a73e7cnl'
    ])

    const { result } = renderHook(() => useCart(), { wrapper })

    await waitFor(() => {
      expect(result.current.items).toStrictEqual(cartItems)
      expect(result.current.quantity).toBe(2)
      expect(result.current.total).toBe('$21.00')
    })
  })
})
