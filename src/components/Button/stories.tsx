import { StoryObj, Meta } from '@storybook/react'
import Button from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: StoryObj = {}
Default.args = {
  children: 'Buy now'
}

export const withIcon: StoryObj = {}
withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const asLink: StoryObj = {}
withIcon.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
