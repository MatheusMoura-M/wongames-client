import { CartContextDefaultValues } from '@/hooks/use-cart'
import { render, screen, waitFor } from '@/utils/test.utils'
import userEvent from '@testing-library/user-event'
import CartButton from '.'

describe('<CartButton />', () => {
  beforeAll(() => window.localStorage.clear())

  it('should render button to add and call the method if clicked', async () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => false,
      addToCart: jest.fn()
    }

    render(<CartButton documentId="ahef7s9utp83c41ezwfggp45" />, {
      cartProviderProps
    })

    const button = screen.getByLabelText(/add to cart/i)
    expect(button).toBeInTheDocument()

    await waitFor(() => {
      userEvent.click(button)
      expect(cartProviderProps.addToCart).toHaveBeenCalledWith(
        'ahef7s9utp83c41ezwfggp45'
      )
    })
  })

  it('should render button to remove and call the method if clicked', async () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }

    render(<CartButton documentId="ahef7s9utp83c41ezwfggp45" />, {
      cartProviderProps
    })

    const button = screen.getByLabelText(/remove from cart/i)
    expect(button).toBeInTheDocument()

    await waitFor(() => {
      userEvent.click(button)
      expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith(
        'ahef7s9utp83c41ezwfggp45'
      )
    })
  })
})
