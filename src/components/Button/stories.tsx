import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { Store } from '@styled-icons/material-outlined/Store'
import Button from '.'

const icons = {
  AddShoppingCart: <AddShoppingCart />,
  Store: <Store />
}

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      control: 'text'
    },
    icon: {
      type: 'symbol',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          AddShoppingCart: 'AddIcon',
          Store: 'Store'
        }
      }
    },
    size: {
      type: 'string',
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
    // Correto é assim mas passei como string porque o argTypes está mapeando
    // icon: <AddShoppingCart />
    icon: 'AddShoppingCart'
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
