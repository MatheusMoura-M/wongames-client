import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Buy now'
  }
}

export const withIcon: Story = {
  args: {
    size: 'small',
    children: 'Buy now',
    icon: <AddShoppingCart />
  }
}

export const asLink: Story = {
  args: {
    size: 'large',
    children: 'Buy now',
    as: 'a',
    href: '/link'
  }
}
