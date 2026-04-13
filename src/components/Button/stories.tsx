import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { Store } from '@styled-icons/material-outlined/Store'
import Button from '.'

const icons = {
  AddShoppingCart: <AddShoppingCart />,
  Store: <Store />
}

const meta = {
  title: 'Main/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      control: 'text'
    },
    size: {
      type: 'string',
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  },
  args: {
    children: 'Buy now'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const withIcon: Story = {
  argTypes: {
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
    }
  },
  args: {
    size: 'small',
    // Correto é assim mas passei como string porque o argTypes está mapeando
    // icon: <AddShoppingCart />
    icon: 'AddShoppingCart'
  }
}

export const asLink: Story = {
  args: {
    size: 'large',
    as: 'a',
    href: '/link'
  }
}
