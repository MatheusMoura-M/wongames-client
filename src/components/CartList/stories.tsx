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
type Story = StoryObj

export const Default: Story = {
  args: {
    total: 'R$ 330,00',
    cartContextValue: { items: mockItems }
  },
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  )
}

export const WithButton: Story = {
  argTypes: {
    hasButton: { type: 'boolean', control: 'boolean' }
  },
  args: {
    total: 'R$ 330,00',
    cartContextValue: { items: mockItems },
    hasButton: true
  },
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  )
}

export const Empty: StoryObj<typeof CartList> = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <CartList />
    </div>
  )
}
