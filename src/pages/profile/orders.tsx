import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

import { QueryOrdersDocument } from '@/graphql/queries/__generated__/QueryOrders'

import { initializeApollo } from '@/utils/apollo'
import { ordersMapper } from '@/utils/mappers'

import Profile from '@/templates/Profile'
import OrdersList, { OrdersListProps } from '@/components/OrdersList'

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

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query({
    query: QueryOrdersDocument,
    variables: {
      identifier: session?.id
    }
  })

  console.log('Order formatted =>', ordersMapper(data.orders)?.[0])

  return {
    props: {
      session,
      items: ordersMapper(data.orders)
    }
  }
}
