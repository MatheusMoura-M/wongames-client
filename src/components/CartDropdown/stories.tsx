import items from '@/components/CartList/mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CartDropdown from '.'

const meta = {
  title: 'CartDropdown',
  component: CartDropdown,
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof CartDropdown>

export default meta
type Story = StoryObj<typeof CartDropdown>

export const Default: Story = {
  args: {
    items,
    total: 'R$ 430,00'
  },
  render: (args) => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown {...args} />
    </div>
  )
}

export const Empty: Story = {
  render: () => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown />
    </div>
  )
}
