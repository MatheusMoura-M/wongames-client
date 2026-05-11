import { render, screen } from '@/utils/test-utils'
import userEvent from '@testing-library/user-event'
import UserDropdown from '.'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({ query: {} }))

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Willian" />)

    expect(screen.getByText(/willian/i)).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    const user = userEvent.setup()

    render(<UserDropdown username="Willian" />)
    // open menu

    await user.click(screen.getByText(/willian/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})
