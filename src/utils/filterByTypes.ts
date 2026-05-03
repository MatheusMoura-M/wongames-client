import { QueryGameBySlugQuery } from '@/graphql/queries/__generated__/QueryGameBySlug'
import { QueryGamesQuery } from '@/graphql/queries/__generated__/QueryGames'
import { QueryOrdersQuery } from '@/graphql/queries/__generated__/QueryOrders'

export const isGame = (
  value: QueryGamesQuery['games'][number]
): value is NonNullable<QueryGamesQuery['games'][number]> => {
  return value != null
}

export const isSlugGame = (
  value: QueryGameBySlugQuery['games'][number]
): value is NonNullable<QueryGameBySlugQuery['games'][number]> => {
  return value != null
}

export const isOrder = (
  value: QueryOrdersQuery['orders'][number]
): value is NonNullable<QueryOrdersQuery['orders'][number]> => {
  return value != null
}

export const isNotNull = <T>(value: T): value is NonNullable<T> => {
  return value != null
}
