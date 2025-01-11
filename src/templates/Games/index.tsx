import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar'
import GameCard, { GameCardProps } from '@/components/GameCard'
import { Grid } from '@/components/Grid'
import Base from '@/templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { useQueryGames } from '@/graphql/queries/games'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      pagination: { limit: 15 }
    }
  })

  const handleFilter = () => {
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
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
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
                    developer={
                      game?.developers && game.developers.length > 0
                        ? game.developers[0]!.name
                        : ''
                    }
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

export default GamesTemplate
