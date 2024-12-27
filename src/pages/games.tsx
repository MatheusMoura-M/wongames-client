import filterItemsMock from '@/components/ExploreSidebar/mock'
import { queryGames, queryGamesVariables } from '@/graphql/generated/queryGames'
import { QUERY_GAMES } from '@/graphql/queries/games'
import GamesTemplate, { GamesTemplateProps } from '@/templates/Games'
import { initializeApollo } from '@/utils/apollo'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<queryGames, queryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      pagination: {
        limit: 9
      }
    }
  })

  return {
    revalidate: 60,
    props: {
      games: data.games.map((game) => ({
        title: game!.name,
        developer: game!.developers[0]!.name,
        img: `http://localhost:1337${game?.cover!.url}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game!.price)
      })),
      filterItems: filterItemsMock
    }
  }
}
