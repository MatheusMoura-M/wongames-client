import { QueryGamesQuery } from '@/graphql/queries/__generated__/QueryGames'
import {
  QueryHomeQuery,
  QueryHomeQuery_sections_Home_freeGames_ComponentPageSection
} from '@/graphql/queries/__generated__/QueryHome'
import { isGame, isNotNull } from '../filterByTypes'
import formatPrice from '../format-price'

export const bannerMapper = (banners: QueryHomeQuery['banners']) => {
  return banners.map((banner) => ({
    img: banner?.image?.url
      ? `http://localhost:1337${banner.image.url}`
      : `/img/image_empty.png`,
    title: banner?.title,
    subtitle: banner?.subtitle,
    buttonLabel: banner?.button?.label,
    buttonLink: banner?.button?.link,
    ...(banner?.ribbon && {
      ribbon: banner.ribbon?.text,
      ribbonColor: banner.ribbon?.color,
      ribbonSize: banner.ribbon?.size
    })
  }))
}

export const gamesMapper = (games?: QueryGamesQuery['games']) => {
  return (games ?? []).filter(isGame).map((game) => ({
    documentId: game.documentId,
    title: game.name,
    slug: game.slug,
    developer: game.developers?.find(isNotNull)?.name ?? 'Unknown',
    img: game.cover?.url
      ? `http://localhost:1337${game.cover.url}`
      : `/img/image_empty.png`,
    price: game.price
  }))
}

export const highlightMapper = (
  highlight:
    | QueryHomeQuery_sections_Home_freeGames_ComponentPageSection['highlight']
    | null
    | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: highlight?.background?.url
          ? `http://localhost:1337${highlight.background.url}`
          : `/img/image_empty.png`,
        floatImage: highlight?.floatImage?.url
          ? `http://localhost:1337${highlight.floatImage.url}`
          : `/img/image_empty.png`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
}

export const cartMapper = (games: QueryGamesQuery['games'] | undefined) => {
  return (games ?? []).filter(isGame).map((game) => ({
    documentId: game.documentId,
    img: game.cover?.url
      ? `http://localhost:1337${game.cover.url}`
      : `/img/image_empty.png`,
    title: game.name,
    price: game.price ? formatPrice(game.price) : 'Free'
  }))
}

// export const cartMapper = (games: QueryGamesQuery["games"] | undefined) => {
//   return games
//     ? games.map((game) => ({
//         documentId: game?.documentId,
//         img: game?.cover?.url
//           ? `http://localhost:1337${game.cover.url}`
//           : `/img/image_empty.png`,
//         title: game?.name,
//         price: game?.price ? formatPrice(game.price) : 'Free'
//       }))
//     : []
// }
