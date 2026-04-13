import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import OrdersList, { OrdersListProps } from '.'

import itemsMock from './mock'

const meta = {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock
  }
} satisfies Meta<OrdersListProps>

export default meta
type Story = StoryObj<OrdersListProps>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <OrdersList {...args} />
    </div>
  )
}
