import { screen } from '@testing-library/react'
import Banner from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Banner />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Banner
        title="Opa"
        subtitle="subtitle"
        buttonLabel="Button"
        buttonLink="/link"
        img="http:.com"
      />
    )
    expect(screen.getByRole('heading', { name: /Opa/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /subtitle/i })
    ).toBeInTheDocument()
  })
})
