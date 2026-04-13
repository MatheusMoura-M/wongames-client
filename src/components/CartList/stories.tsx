import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CartList from '.'

import mockItems from './mock'

const meta = {
  title: 'Main/CartList',
  component: CartList,
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof CartList>

export default meta
type Story = StoryObj<typeof CartList>

export const Default: Story = {
  argTypes: {
    items: { control: 'object' },
    total: { type: 'string', control: 'text' }
  },
  args: {
    items: mockItems,
    total: 'R$ 430,00'
  },
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  )
}

export const WithButton: Story = {
  argTypes: {
    items: { control: 'object' },
    total: { type: 'string', control: 'text' },
    hasButton: { type: 'boolean', control: 'boolean' }
  },
  args: {
    items: mockItems,
    total: 'R$ 430,00',
    hasButton: true
  },
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
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
