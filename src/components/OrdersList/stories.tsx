import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import OrdersList from '.'

import itemsMock from './mock'

const meta = {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock
  }
} satisfies Meta<typeof OrdersList>

export default meta
type Story = StoryObj<typeof OrdersList>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <OrdersList {...args} />
    </div>
  )
}
