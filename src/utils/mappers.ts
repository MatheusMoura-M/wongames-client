import { QueryGames_games } from '@/graphql/generated/queryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from '@/graphql/generated/QueryHome'

export const bannerMapper = (banners: (QueryHome_banners | null)[]) => {
  return banners.map((banner) => ({
    img: banner?.image
      ? `http://localhost:1337${banner.image.url}`
      : `/img/image_empty.png`,
    title: banner?.title,
    subtitle: banner?.subtitle,
    buttonLabel: banner?.button?.label,
    buttonLink: banner?.button?.link,
    ...(banner?.ribbon && {
      ribbon: banner?.ribbon.text,
      ribbonColor: banner?.ribbon.color,
      ribbonSize: banner?.ribbon.size
    })
  }))
}

export const gamesMapper = (games: (QueryGames_games | null)[]) => {
  return (
    games &&
    games.map((game) => ({
      title: game?.name,
      slug: game?.slug,
      developer: game?.developers[0]?.name,
      img: game?.cover
        ? `http://localhost:1337${game.cover.url}`
        : `/img/image_empty.png`,
      price: game?.price
    }))
  )
}

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: highlight?.background
        ? `http://localhost:1337${highlight.background.url}`
        : `/img/image_empty.png`,
      floatImage: highlight?.floatImage
        ? `http://localhost:1337${highlight.floatImage.url}`
        : `/img/image_empty.png`,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }
  )
}
