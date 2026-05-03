import { useState } from 'react'

import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import Empty from '@/components/Empty'
import GameItem, {
  GameItemProps,
  PaymentInfoProps
} from '@/components/GameItem'
import Heading from '@/components/Heading'

import * as S from './styles'

type OrderProps = {
  documentId: string
  paymentInfo: PaymentInfoProps
  games: GameItemProps[]
}

export type OrdersListProps = {
  items?: OrderProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => {
  const [openOrders, setOpenOrders] = useState<Record<string, boolean>>({})

  const toggleOrder = (id: string) => {
    setOpenOrders((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="primary" color="black" size="small">
        My orders
      </Heading>

      {items.length ? (
        <S.OrdersBox>
          {items.map((order, orderIndex) => {
            const isOpen = openOrders[order.documentId]

            return (
              <S.GamesBox key={`${order.documentId}-${orderIndex}`}>
                <S.OrderTitleBox onClick={() => toggleOrder(order.documentId)}>
                  <S.OrderTitle>
                    <p>OrderId:</p> {order.documentId}
                  </S.OrderTitle>

                  <div>
                    {order?.paymentInfo?.purchaseDate && (
                      <S.OrderDate>
                        {order.paymentInfo.purchaseDate}
                      </S.OrderDate>
                    )}

                    <ChevronDown
                      size={24}
                      color="#F231A5"
                      style={{
                        transition: 'transform 0.4s ease-in-out',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </S.OrderTitleBox>

                <S.Content isOpen={isOpen}>
                  {order.games.map((game, gameIndex) => (
                    <GameItem
                      key={`${order.documentId}-${orderIndex}-${gameIndex}`}
                      {...game}
                      paymentInfo={order.paymentInfo}
                    />
                  ))}
                </S.Content>
              </S.GamesBox>
            )
          })}
        </S.OrdersBox>
      ) : (
        <Empty
          title="You have no orders yet"
          description="Go back to the store and explore great games and offers"
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default OrdersList
