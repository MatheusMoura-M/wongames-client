import itemsMock from '@/components/CartList/mock'
import cardsMock from '@/components/PaymentOptions/mock'
import { QueryRecommendedDocument } from '@/graphql/queries/__generated__/QueryRecommended'
import Cart, { CartProps } from '@/templates/Cart'
import { initializeApollo } from '@/utils/apollo'
import { gamesMapper, highlightMapper } from '@/utils/mappers'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: `/sign-in?callbackUrl=${context.resolvedUrl}`,
        permanent: false
      },
      props: {}
    }
  }

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query({
    query: QueryRecommendedDocument
  })

  return {
    props: {
      session,
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended!.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
