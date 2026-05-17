import 'session.mock'

import { WishlistContextDefaultValues } from '@/hooks/use-wishlist'
import { render, screen, waitFor } from '@/utils/test-utils'
import userEvent from '@testing-library/user-event'
import WishlistButton from '.'

describe('<WishlistButton />', () => {
  it('should render a button to add to wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton documentId="onvc3g44nhn63bp9xji52742" />, {
      wishlistProviderProps
    })

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button to remove from wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton documentId="onvc3g44nhn63bp9xji52742" />, {
      wishlistProviderProps
    })

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with add to wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton documentId="onvc3g44nhn63bp9xji52742" hasText />, {
      wishlistProviderProps
    })

    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with remove from wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton documentId="onvc3g44nhn63bp9xji52742" hasText />, {
      wishlistProviderProps
    })

    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should not render if not logged', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
    useSession.mockImplementationOnce(() => ({
      data: null
    }))

    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton documentId="onvc3g44nhn63bp9xji52742" hasText />, {
      wishlistProviderProps
    })

    expect(screen.queryByText(/remove from wishlist/i)).not.toBeInTheDocument()
  })

  it('should add to wishlist', async () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
      addToWishlist: jest.fn()
    }

    render(<WishlistButton documentId="1" hasText />, { wishlistProviderProps })

    await userEvent.click(screen.getByText(/add to wishlist/i))

    await waitFor(() => {
      expect(wishlistProviderProps.addToWishlist).toHaveBeenCalledWith('1')
    })
  })

  it('should remove from wishlist', async () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
      removeFromWishlist: jest.fn()
    }

    render(<WishlistButton documentId="1" hasText />, { wishlistProviderProps })

    await userEvent.click(screen.getByText(/remove from wishlist/i))

    await waitFor(() => {
      expect(wishlistProviderProps.removeFromWishlist).toHaveBeenCalledWith('1')
    })
  })
})
