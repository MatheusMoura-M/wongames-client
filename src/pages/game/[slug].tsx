import { QueryGameBySlugDocument } from '@/graphql/queries/__generated__/QueryGameBySlug'
import { QueryGamesDocument } from '@/graphql/queries/__generated__/QueryGames'
import { QueryRecommendedDocument } from '@/graphql/queries/__generated__/QueryRecommended'
import { QueryUpcomingDocument } from '@/graphql/queries/__generated__/QueryUpcoming'
import Game, { GameTemplateProps } from '@/templates/Game'
import { initializeApollo } from '@/utils/apollo'
import { isNotNull, isSlugGame } from '@/utils/filterByTypes'
import { getImageUrl } from '@/utils/getImageUrl'
import { gamesMapper, highlightMapper } from '@/utils/mappers'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

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
  const { data } = await apolloClient.query({
    query: QueryGamesDocument,
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
  const { data } = await apolloClient.query({
    query: QueryGameBySlugDocument,
    variables: {
      filters: {
        slug: {
          eq: `${params?.slug}`
        }
      }
    },
    fetchPolicy: 'no-cache'
  })

  const games = data.games.filter(isSlugGame)

  if (!games.length) {
    return { notFound: true }
  }

  const game = games[0]

  // Get recommended games
  const { data: recommendedSection } = await apolloClient.query({
    query: QueryRecommendedDocument
  })

  const TODAY = new Date().toISOString().slice(0, 10)
  const { data: upcoming } = await apolloClient.query({
    query: QueryUpcomingDocument,
    variables: { date: TODAY }
  })

  return {
    revalidate: 60,
    props: {
      cover: game.cover?.src
        ? `${getImageUrl(game.cover.src)}`
        : `/img/image_empty.png`,
      gameInfo: {
        documentId: game.documentId,
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: image?.src ? `${getImageUrl(image.src)}` : `/img/image_empty.png`,
        label: image?.label ?? ''
      })),
      description: game.description,
      details: {
        developer: game.developers?.find(isNotNull)?.name ?? 'Unknown',
        releaseDate: game.release_date,
        platforms: game.platforms
          .filter(isNotNull)
          .map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories
          .filter(isNotNull)
          .map((category) => category.name)
      },

      upcomingTitle: upcoming.showcase?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcoming.showcase?.upcomingGames?.highlight
      ),

      recommendedTitle: recommendedSection.recommended?.section?.title,
      recommendedGames: gamesMapper(
        recommendedSection.recommended?.section?.games
      )
    }
  }
}
