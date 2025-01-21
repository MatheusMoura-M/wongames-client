import filterItemsMock from '@/components/ExploreSidebar/mock'
import { renderWithTheme } from '@/utils/tests/helpers'
import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import Games from '.'
import { emptyGamesMock, fetchMoreMock, gamesMock } from './mocks'
import userEvent from '@testing-library/user-event'
import apolloCache from '@/utils/apolloCache'

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
    renderWithTheme(
      <MockedProvider mocks={[emptyGamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      screen.getByRole('img', { name: /Loading more games.../i })
    ).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
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
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render empty when no games found', async () => {
    renderWithTheme(
      <MockedProvider mocks={[emptyGamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      await screen.findByText(/We didn't find any games with this filter/i)
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })

  it('should change push router when selecting a filter', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }))
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }))
    userEvent.click(await screen.findByLabelText(/low to high/i))

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
    })
  })
})
