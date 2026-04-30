import { setStorageItem } from '@/utils/localStorage'
import { MockedProvider } from '@apollo/client/testing'
import { act, renderHook, waitFor } from '@testing-library/react'
import { CartProvider, CartProviderProps, useCart } from '.'
import { cartItems, gamesMock, singleGameMock } from './mock'

describe('useCart', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

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

    expect(result.current.loading).toBe(true)

    await waitFor(() => {
      expect(result.current.loading).toBe(false)

      expect(result.current.items).toStrictEqual(cartItems)
      expect(result.current.quantity).toBe(2)
      expect(result.current.total).toBe('$21.00')
    })
  })

  it('should return true/false if the item is already in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[singleGameMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', ['ahef7s9utp83c41ezwfggp45'])

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    expect(result.current.isInCart('ahef7s9utp83c41ezwfggp45')).toBe(true)
    expect(result.current.isInCart('2')).toBe(false)
  })

  it('should add item in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[singleGameMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => {
      result.current.addToCart('ahef7s9utp83c41ezwfggp45')
    })

    expect(result.current.quantity).toBe(1)
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify(['ahef7s9utp83c41ezwfggp45'])
    )
  })

  it('should remove and item from the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[singleGameMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', ['ahef7s9utp83c41ezwfggp45'])

    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => {
      result.current.removeFromCart('ahef7s9utp83c41ezwfggp45')
    })

    expect(result.current.quantity).toBe(0)
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify([])
    )
  })

  it('should clear the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[singleGameMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', ['ahef7s9utp83c41ezwfggp45'])

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    act(() => {
      result.current.clearCart()
    })

    expect(result.current.quantity).toBe(0)
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify([])
    )
  })
})
