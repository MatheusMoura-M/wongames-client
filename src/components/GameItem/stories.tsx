import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import GameItem, { GameItemProps } from '.'

const meta = {
  title: 'Main/GameItem',
  component: GameItem,
  args: {
    img: 'https://items.gog.com/not_a_cp/EN/EN-Mercenary-Outlaw.png',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} satisfies Meta<GameItemProps>

export default meta
type Story = StoryObj<GameItemProps>

export const Default: Story = {}

export const WithPayment: Story = {
  args: {
    downloadLink: 'https://wongames.com/game/download/21312ndasd',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }
  }
}
