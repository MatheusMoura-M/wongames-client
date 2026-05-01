import CardsList, { CardsListProps } from '@/components/CardsList'
import mockCards from '@/components/PaymentOptions/mock'
import Profile from '@/templates/Profile'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
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

  return {
    props: {
      cards: mockCards,
      session
    }
  }
}
