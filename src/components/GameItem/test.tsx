import { CartContextDefaultValues } from '@/hooks/use-cart'
import { render, screen, waitFor } from '@/utils/test-utils'
import userEvent from '@testing-library/user-event'
import GameItem from '.'
import { StaticImageImport } from '../CardsList/test'

const props = {
  documentId: 'ahef7s9utp83c41ezwfggp45',
  img: 'https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  default: ({ src, alt, fill, priority, ...props }: StaticImageImport) => (
    <img src={src} alt={alt} {...props} />
  )
}))

describe('<GameItem />', () => {
  it('should render the item', () => {
    render(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render remove if the item is inside the cart and call remove', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }
    render(<GameItem {...props} />, { cartProviderProps })

    const removeLink = screen.getByText(/remove/i)
    expect(removeLink).toBeInTheDocument()

    waitFor(() => {
      userEvent.click(removeLink)
      expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith(
        'ahef7s9utp83c41ezwfggp45'
      )
    })
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'
    render(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)
    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
