import { WishlistContextDefaultValues } from '@/hooks/use-wishlist'
import { render, screen } from '@/utils/test-utils'
import WishlistButton from '.'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
const session = { jwt: '123', user: { email: 'lorem@ipsum.com' } }
useSession.mockImplementation(() => ({ data: session }))

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
})
