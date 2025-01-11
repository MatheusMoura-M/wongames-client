import filterItemsMock from '@/components/ExploreSidebar/mock'
import { QUERY_GAMES } from '@/graphql/queries/games'
import { renderWithTheme } from '@/utils/tests/helpers'
import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import Games from '.'

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))
jest.mock('@/components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

const mocks = [
  {
    request: {
      query: QUERY_GAMES,
      variables: { pagination: { limit: 15 } }
    },
    result: {
      data: {
        games: [
          {
            name: 'Just Cause 2 - Complete Edition',
            slug: 'just_cause_2_complete_edition',
            cover: {
              url: '/uploads/just_cause_2_complete_edition_07fd978023.jpg'
            },
            developers: [{ name: 'Avalanche Studios' }],
            price: 1.99,
            __typename: 'Game'
          }
        ]
      }
    }
  }
]

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      screen.getByRole('img', { name: /Loading more games.../i })
    ).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={mocks} addTypename={false}>
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
    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(
      await screen.findByText(/Just Cause 2 - Complete Edition/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
