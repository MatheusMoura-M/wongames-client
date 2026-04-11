import userEvent from '@testing-library/user-event'
import { render, screen } from '@/utils/test.utils'

import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle dropdown">Click here</h1>

    render(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )
  })

  it('should render title', () => {
    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument()
  })

  it('should handle open/close dropdown', async () => {
    const user = userEvent.setup()
    const content = screen.getByText(/content/).parentElement!

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content.getAttribute('aria-hidden')).toBe('true')

    await user.click(screen.getByLabelText(/toogle dropdown/))

    expect(content).toHaveStyle({ opacity: 1 })
    expect(content.getAttribute('aria-hidden')).toBe('false')
  })

  it('should handle open/close dropdown when clicking on overlay', async () => {
    const user = userEvent.setup()

    const content = screen.getByText(/content/).parentElement!
    const overlay = content.nextElementSibling

    if (!overlay) throw new Error('Overlay not found')

    await user.click(screen.getByLabelText(/toogle dropdown/))

    expect(overlay).toHaveStyle({ opacity: 1 })
    expect(overlay).toHaveAttribute('aria-hidden', 'false')

    await user.click(overlay)

    expect(overlay).toHaveStyle({ opacity: 0 })
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
  })
})
