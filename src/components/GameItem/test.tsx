import { screen } from '@testing-library/react'
import GameItem from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  img: 'https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => <img src={props.img} alt={props.title} />
}));

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'
    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })
})
