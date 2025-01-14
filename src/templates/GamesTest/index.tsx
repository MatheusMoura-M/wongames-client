import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar'
import GameCard, { GameCardProps } from '@/components/GameCard'
import { Grid } from '@/components/Grid'
import { useQueryGames } from '@/graphql/queries/games'
import Base from '@/templates/Base'
import {
  parseQueryStringToFilter,
  parseQueryStringToFilterSecond,
  parseQueryStringToWhere,
  parseQueryStringToWhereSecond
} from '@/utils/filter'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { useRouter } from 'next/router'
import qs from 'qs'
import { ParsedUrlQueryInput } from 'querystring'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplateTest = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  console.log('QUERY', query)

  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      pagination: { limit: 5 },
      filters: parseQueryStringToWhereSecond({ queryString: query, filterItems }),
      sort: query.sort as (string | null)[] | null
    }
  })

  const handleFilter = (items: ParsedUrlQueryInput) => {
    const test = parseQueryStringToFilterSecond({
      queryString: items,
      filterItems
    })

    push({
      pathname: '/test',
      query: test
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        pagination: { limit: 15, start: data?.games.length }
      }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilterSecond({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        {typeof window === 'undefined' ? (
          <S.ShowMoreLoading src="/img/dots.svg" alt="Loading more games..." />
        ) : loading ? (
          <S.ShowMoreLoading src="/img/dots.svg" alt="Loading more games..." />
        ) : (
          <section>
            <Grid>
              {data?.games.map((game) => {
                return (
                  <GameCard
                    key={game!.slug}
                    title={game!.name}
                    slug={game!.slug!}
                    developer={game!.developers[0]!.name}
                    img={
                      game!.cover
                        ? `http://localhost:1337${game!.cover.url}`
                        : `/img/image_empty.png`
                    }
                    price={game!.price}
                  />
                )
              })}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplateTest
