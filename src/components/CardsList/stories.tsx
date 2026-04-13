import cardsMock from '@/components/PaymentOptions/mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CardsList from '.'

const meta = {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} satisfies Meta<typeof CardsList>

export default meta
type Story = StoryObj<typeof CardsList>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <CardsList {...args} />
    </div>
  )
}
