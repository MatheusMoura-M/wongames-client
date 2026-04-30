import { render, screen } from '@/utils/test-utils'
import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    render(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(screen.getByRole('link', { name: /link/i })).toBeInTheDocument()
  })
})
