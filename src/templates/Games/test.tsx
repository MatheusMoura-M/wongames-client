import filterItemsMock from '@/components/ExploreSidebar/mock'
import apolloCache from '@/utils/apolloCache'
import { render, screen, waitFor } from '@/utils/test-utils'
import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'
import Games from '.'
import { emptyGamesMock, fetchMoreMock, gamesMock } from './mocks'

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

/* eslint-disable @typescript-eslint/no-require-imports */
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()
useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    render(
      <MockedProvider mocks={[emptyGamesMock]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      screen.getByRole('img', { name: /Loading more games.../i })
    ).toBeInTheDocument()
  })

  it('should render sections', async () => {
    render(
      <MockedProvider mocks={[gamesMock]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    // it starts without data
    // shows loading
    expect(
      screen.getByRole('img', { name: /Loading more games.../i })
    ).toBeInTheDocument()

    // we wait until we have data to get the elements
    // get => tem certeza do elemento
    // query => Não tem o elemento
    // find => processos assincronos
    expect(await screen.findByText(/Price/i)).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render empty when no games found', async () => {
    render(
      <MockedProvider mocks={[emptyGamesMock]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      await screen.findByText(/We didn't find any games with this filter/i)
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    const user = userEvent.setup()

    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    await user.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })

  it('should change push router when selecting a filter', async () => {
    const user = userEvent.setup()

    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    await user.click(await screen.findByRole('checkbox', { name: /windows/i }))
    await user.click(await screen.findByRole('checkbox', { name: /linux/i }))
    await user.click(await screen.findByLabelText(/Lowest to highest/i))

    await waitFor(() =>
      expect(push).toHaveBeenCalledWith({
        pathname: '/games',
        query: { platforms: ['windows', 'linux'], sort_by: 'price:asc' }
      })
    )
  })
})
