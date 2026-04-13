import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CartIcon from '.'

const meta = {
  title: 'CartIcon',
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
  render: () => <CartIcon />
}

export const withItems: Story = {
  render: () => <CartIcon />,
  args: {
    quantity: 3
  }
}
