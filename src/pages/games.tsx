import filterItemsMock from '@/components/ExploreSidebar/mock'
import { QueryGames, QueryGamesVariables } from '@/graphql/generated/queryGames'
import { QUERY_GAMES } from '@/graphql/queries/games'
import GamesTemplate, { GamesTemplateProps } from '@/templates/Games'
import { initializeApollo } from '@/utils/apollo'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
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
        title: game?.name,
        slug: game?.slug,
        developer: game?.developers[0]?.name,
        img: game?.cover
          ? `http://localhost:1337${game.cover.url}`
          : `/img/image_empty.png`,
        price: game?.price
      })),
      filterItems: filterItemsMock
    }
  }
}
