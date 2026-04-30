import formatPrice from '@/utils/format-price'
import Image from 'next/image'
import Link from 'next/link'
import CartButton from '../CartButton'
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon'
import WishlistButton from '../WishlistButton'
import * as S from './styles'

export type GameCardProps = {
  documentId: string
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const GameCard = ({
  documentId,
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <Image src={img} alt={title} fill sizes="100%" priority />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>

      <S.FavButton>
        <WishlistButton documentId={documentId} />
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>
          {promotionalPrice || price > 0
            ? formatPrice(promotionalPrice || price)
            : 'Free'}
        </S.Price>

        <CartButton documentId={documentId} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
