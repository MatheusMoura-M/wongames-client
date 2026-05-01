import FormProfile, { FormProfileProps } from '@/components/FormProfile'
import { QueryProfileMeDocument } from '@/graphql/queries/__generated__/QueryProfileMe'
import Profile from '@/templates/Profile'
import { initializeApollo } from '@/utils/apollo'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session || !session?.id) {
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
    query: QueryProfileMeDocument,
    variables: {
      documentId: session.id
    }
  })

  return {
    props: {
      session,
      username: data.usersPermissionsUser?.username,
      email: data.usersPermissionsUser?.email
    }
  }
}
