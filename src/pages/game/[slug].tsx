import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from '@/graphql/generated/QueryGameBySlug'
import { QueryGames, QueryGamesVariables } from '@/graphql/generated/QueryGames'
import { QUERY_GAME_BY_SLUG, QUERY_GAMES } from '@/graphql/queries/games'

import Game, { GameTemplateProps } from '@/templates/Game'
import { initializeApollo } from '@/utils/apollo'

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

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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

  return {
    revalidate: 60,
    props: {
      cover: `http://localhost:1337${game!.cover?.src}`,
      gameInfo: {
        title: game!.name,
        price: game!.price,
        description: game!.short_description
      },
      gallery: game!.gallery,
      description: game!.description,
      details: {
        developer: game!.developers[0]!.name,
        releaseDate: game!.release_date,
        platforms: game!.platforms.map((platform) => platform!.name),
        publisher: game!.publisher?.name,
        rating: game!.rating,
        genres: game!.categories.map((category) => category!.name)
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
