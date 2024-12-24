import { screen } from '@testing-library/react'
import GameItem from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  img: '/img/red-dead-img.jpg',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

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
})
