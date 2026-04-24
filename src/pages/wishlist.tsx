import gamesMock from '@/components/GameCardSlider/mock'
import { QueryRecommendedDocument } from '@/graphql/queries/__generated__/QueryRecommended'
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

  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: QueryRecommendedDocument
  })

  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended!.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
