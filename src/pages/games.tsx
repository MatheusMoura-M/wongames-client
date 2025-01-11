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

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      pagination: {
        limit: 15
      }
    }
  })

  return {
    revalidate: 60,
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}
