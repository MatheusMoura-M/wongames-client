import { renderWithTheme } from '@/utils/tests/helpers'
import theme from '@/styles/theme'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )
    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    // VERSÃO DO PRETTIER ACIMA DE 3.0 BUGA ESSE TESTE
    // expect(container.firstChild). toMatchInlineSnapshot()
  })
})
