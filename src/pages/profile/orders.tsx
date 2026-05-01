import OrdersList, { OrdersListProps } from '@/components/OrdersList'
import Profile from '@/templates/Profile'
import ordersMock from '@/components/OrdersList/mock'
import protectedRoutes from '@/utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
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
      session,
      items: ordersMock
    }
  }
}
