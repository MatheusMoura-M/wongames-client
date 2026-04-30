import cardsMock from '@/components/PaymentOptions/mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CardsList, { CardsListProps } from '.'

const meta = {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} satisfies Meta<CardsListProps>

export default meta
type Story = StoryObj<CardsListProps>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <CardsList {...args} />
    </div>
  )
}
