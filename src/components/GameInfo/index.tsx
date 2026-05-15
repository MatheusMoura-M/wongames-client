import formatPrice from '@/utils/format-price'
import CartButton from '../CartButton'
import Heading from '../Heading'
import Ribbon from '../Ribbon'
import WishlistButton from '../WishlistButton'
import * as S from './styles'

export type GameInfoProps = {
  documentId: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ documentId, title, description, price }: GameInfoProps) => (
  <S.Wrapper data-cy="game-info">
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton documentId={documentId} size="large" hasText />

      <WishlistButton documentId={documentId} hasText size="large" />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
