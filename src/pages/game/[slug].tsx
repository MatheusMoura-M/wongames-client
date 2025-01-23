import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from '@/graphql/generated/QueryGameBySlug'
import { QueryGames, QueryGamesVariables } from '@/graphql/generated/queryGames'
import { QUERY_GAME_BY_SLUG, QUERY_GAMES } from '@/graphql/queries/games'
import { QueryRecommended } from '@/graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended'
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from '@/graphql/generated/QueryUpcoming'
import { QUERY_UPCOMING } from '@/graphql/queries/upcoming'

import Game, { GameTemplateProps } from '@/templates/Game'
import { initializeApollo } from '@/utils/apollo'
import { gamesMapper, highlightMapper } from '@/utils/mappers'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

  return <Game {...props} />
}

// gerar em build time (/game/bla, /bame/foo ...)
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      pagination: {
        limit: 9
      }
    }
  })

  const paths = data.games
    .filter((game) => game !== null)
    .map(({ slug }) => ({
      params: { slug }
    }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get game data
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      filters: {
        slug: {
          eq: `${params?.slug}`
        }
      }
    }
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  // Get recommended games
  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  const TODAY = new Date().toISOString().slice(0, 10)
  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({ query: QUERY_UPCOMING, variables: { date: TODAY } })

  return {
    revalidate: 60,
    props: {
      cover: game?.cover
        ? `http://localhost:1337${game.cover.src}`
        : `/img/image_empty.png`,
      gameInfo: {
        title: game?.name,
        price: game?.price,
        description: game?.short_description
      },
      gallery: game?.gallery.map((image) => ({
        src: image
          ? `http://localhost:1337${image.src}`
          : `/img/image_empty.png`,
        label: image?.label
      })),
      description: game?.description,
      details: {
        developer: game?.developers[0]?.name,
        releaseDate: game?.release_date,
        platforms: game?.platforms.map((platform) => platform?.name),
        publisher: game?.publisher?.name,
        rating: game?.rating,
        genres: game?.categories.map((category) => category!.name)
      },
      upcomingTitle: upcoming.showcase?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcoming.showcase?.upcomingGames?.highlight
      ),
      recommendedTitle: recommended.recommended?.section?.title,
      recommendedGames: gamesMapper(recommended.recommended!.section?.games)
    }
  }
}
