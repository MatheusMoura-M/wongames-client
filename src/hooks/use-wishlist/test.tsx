import { act, renderHook, waitFor } from '@/utils/test.utils'
import { MockedProvider } from '@apollo/client/testing'
import { useWishlist, WishlistProvider } from '.'
import {
  createWishlistMock,
  emptyWishlistMock,
  updateWishlistMock,
  wishlistItems,
  wishlistMock
} from './mock'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
const session = { jwt: '123', user: { email: 'lorem@ipsum.com' } }

useSession.mockImplementation(() => ({
  data: session
}))

describe('useWishlist', () => {
  it('should return wishlist items', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })

    // it starts loading the data
    expect(result.current.loading).toBe(true)

    await waitFor(() => {
      expect(result.current.items).toStrictEqual([
        wishlistItems[0],
        wishlistItems[1]
      ])
    })
  })

  it('should check if the game is in the wishlist', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })

    await waitFor(() => {
      expect(result.current.isInWishlist('gk60wzt9lvucsx56a73e7cnl')).toBe(true)
      expect(result.current.isInWishlist('gk60wzt9lvucsx56a73e7cnl')).toBe(true)
      expect(result.current.isInWishlist('3')).toBe(false)
    })
  })

  it('should add item in wishlist creating a new list', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[emptyWishlistMock, createWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })

    act(() => {
      result.current.addToWishlist('onvc3g44nhn63bp9xji52743')
    })

    await waitFor(() => {
      expect(result.current.items).toStrictEqual([wishlistItems[2]])
    })
  })

  it('should add item in wishlist updating the current list', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock, updateWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })

    await waitFor(() => {
      expect(result.current.items.length).toBe(2)
    })

    act(() => {
      result.current.addToWishlist('onvc3g44nhn63bp9xji52743')
    })

    // wait for the data to load
    await waitFor(() => {
      expect(result.current.items).toStrictEqual(wishlistItems)
    })
  })
})
