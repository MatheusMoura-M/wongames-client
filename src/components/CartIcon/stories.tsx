import { Meta, StoryObj } from '@storybook/react'
import CartIcon, { CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: () => <CartIcon />
}

export const withItems: StoryObj<CartIconProps> = {
  render: (args) => <CartIcon {...args} />,
  args: {
    quantity: 3
  }
}
