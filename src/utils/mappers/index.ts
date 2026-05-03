import { QueryGamesQuery } from '@/graphql/queries/__generated__/QueryGames'
import {
  QueryHomeQuery,
  QueryHomeQuery_sections_Home_freeGames_ComponentPageSection
} from '@/graphql/queries/__generated__/QueryHome'
import { QueryOrdersQuery } from '@/graphql/queries/__generated__/QueryOrders'
import { isGame, isNotNull, isOrder } from '../filterByTypes'
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

export const ordersMapper = (orders: QueryOrdersQuery['orders']) => {
  return (orders ?? []).filter(isOrder).map((order) => {
    return {
      documentId: order.documentId,
      paymentInfo: {
        flag: order.card_brand,
        img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
        number: order.card_last4
          ? `**** **** **** ${order.card_last4}`
          : 'Free Game',
        purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }).format(new Date(order.createdAt))}`
      },
      games: (order.games ?? []).filter(isGame).map((game) => ({
        documentId: game.documentId,
        title: game.name,
        downloadLink:
          'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
        img: `http://localhost:1337${game.cover?.url}`,
        price: formatPrice(game.price)
      }))
    }
  })
}
