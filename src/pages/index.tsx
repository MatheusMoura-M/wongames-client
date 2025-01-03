import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'
import { QueryHome } from '@/graphql/generated/QueryHome'
import { QUERY_HOME } from '@/graphql/queries/home'
import Home, { HomeTemplateProps } from '@/templates/Home'
import { initializeApollo } from '@/utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)
export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    revalidate: 10,
    props: {
      banners: data.banners.map((banner) => ({
        img: `http://localhost:1337${banner?.image?.url}`,
        title: banner?.title,
        subtitle: banner?.subtitle,
        buttonLabel: banner?.button?.label,
        buttonLink: banner?.button?.link,
        ...(banner?.ribbon && {
          ribbon: banner?.ribbon.text,
          ribbonColor: banner?.ribbon.color,
          ribbonSize: banner?.ribbon.size
        })
      })),
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
