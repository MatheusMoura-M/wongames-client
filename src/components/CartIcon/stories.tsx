import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CartIcon from '.'

const meta = {
  title: 'Main/CartIcon',
  component: CartIcon,
  argTypes: {
    quantity: {
      type: 'number',
      control: 'number'
    }
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof CartIcon>

export default meta
type Story = StoryObj<typeof CartIcon>

export const Default: Story = {
  args: {
    quantity: 0
  },
  render: () => <CartIcon />
}

export const withItems: Story = {
  args: {
    quantity: 3
  },
  render: () => <CartIcon />
}
