import FormProfile, { FormProfileProps } from '@/components/FormProfile'
import { QueryProfileMeDocument } from '@/graphql/queries/__generated__/QueryProfileMe'
import Profile from '@/templates/Profile'
import { initializeApollo } from '@/utils/apollo'
import protectedRoutes from '@/utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query({
    query: QueryProfileMeDocument
  })

  return {
    props: { session, username: data.me?.username, email: data.me?.email }
  }
}
