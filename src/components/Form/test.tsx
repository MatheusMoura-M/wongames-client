import { renderWithTheme } from '@/utils/tests/helpers'
import { FormLink, FormWrapper } from '.'
import { screen } from '@testing-library/dom'

describe('<Form />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(screen.getByRole('link', { name: /link/i })).toBeInTheDocument()
  })
})
