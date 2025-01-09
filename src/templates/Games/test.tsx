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
jest.mock('@/components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
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
            name: 'StarcomNexus',
            slug: 'starcomnexus',
            cover: {
              url: '/uploads/starcomnexus_a23d4514e0.jpg'
            },
            developers: [
              {
                name: 'Wx3 Labs'
              }
            ],
            price: 4.99
          }
        ]
      }
    }
  }
]

describe('<Games />', () => {
  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByTestId('Mock GameCard')).toBeInTheDocument()

    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
