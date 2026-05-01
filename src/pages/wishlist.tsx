import gamesMock from '@/components/GameCardSlider/mock'
import { QueryRecommendedDocument } from '@/graphql/queries/__generated__/QueryRecommended'
import { QueryWishlistDocument } from '@/graphql/queries/__generated__/QueryWishlist'
import Wishlist, { WishlistTemplateProps } from '@/templates/Wishlist'
import { initializeApollo } from '@/utils/apollo'
import { gamesMapper, highlightMapper } from '@/utils/mappers'
import protectedRoutes from '@/utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo(null, session)

  if (!session) return {}

  await apolloClient.query({
    query: QueryWishlistDocument,
    variables: {
      identifier: session?.user?.email as string
    }
  })

  const { data } = await apolloClient.query({
    query: QueryRecommendedDocument
  })

  return {
    props: {
      session,
      games: gamesMock,
      initialApolloState: apolloClient.cache.extract(),
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended!.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
