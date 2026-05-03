import { useCart } from '@/hooks/use-cart'
import { Download } from '@styled-icons/boxicons-solid/Download'
import Image from 'next/image'
import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  documentId: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  documentId,
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart()

  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <Image src={img} alt={title} fill sizes="100%" priority />
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}

            {!!downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>

          <S.Group>
            <S.Price>{price}</S.Price>

            {isInCart(documentId) && (
              <S.Remove onClick={() => removeFromCart(documentId)}>
                Remove
              </S.Remove>
            )}
          </S.Group>
        </S.Content>
      </S.GameContent>

      {!!paymentInfo && (
        <S.PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>

          <S.CardInfo>
            <span>{paymentInfo.number}</span>

            {!!paymentInfo.img && (
              <Image
                src={paymentInfo.img}
                alt={paymentInfo.flag}
                width={38}
                height={24}
              />
            )}
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}

export default GameItem
