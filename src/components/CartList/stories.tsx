import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CartList from '.'

import mockItems from './mock'

const meta = {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },
  argTypes: {
    items: {
      type: 'function'
    }
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof CartList>

export default meta
type Story = StoryObj<typeof CartList>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  )
}

export const WithButton: Story = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} hasButton />
    </div>
  )
}

export const Empty: Story = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <CartList />
    </div>
  )
}
