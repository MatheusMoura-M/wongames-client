import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar'
import GameCard, { GameCardProps } from '@/components/GameCard'
import { Grid } from '@/components/Grid'
import { useQueryGames } from '@/graphql/queries/games'
import Base from '@/templates/Base'
import {
  parseQueryStringToFilter,
  parseQueryStringToWhere
} from '@/utils/filter'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import * as S from './styles'
import Empty from '@/components/Empty'
import { useEffect, useState } from 'react'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()
  const [isClient, setIsClient] = useState(false)

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      pagination: { limit: 15 },
      filters: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as (string | null)[] | null
    }
  })

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
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

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        {isClient && (
          <S.ContainerCenter>
            {data ? (
              data.games && data.games.length > 0 ? (
                <>
                  <Grid>
                    {data.games.map((game) => (
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
                    ))}
                  </Grid>

                  <S.ShowMore>
                    {loading ? (
                      <S.ShowMoreLoading
                        src="/img/dots.svg"
                        alt="Loading more games..."
                      />
                    ) : (
                      <S.ShowMoreButton role="button" onClick={handleShowMore}>
                        <p>Show More</p>
                        <ArrowDown size={35} />
                      </S.ShowMoreButton>
                    )}
                  </S.ShowMore>
                </>
              ) : (
                <Empty
                  title=":("
                  description="We didn't find any games with this filter"
                  hasLink
                />
              )
            ) : (
              <S.ShowMoreLoading
                src="/img/dots.svg"
                alt="Loading more games..."
              />
            )}
          </S.ContainerCenter>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
