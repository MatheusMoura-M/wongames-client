import 'match-media-mock'
import GameCardSlider from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import { screen } from '@testing-library/react'
import items from './mock'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
