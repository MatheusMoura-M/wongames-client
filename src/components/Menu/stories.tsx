import { StoryObj, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<MenuProps> = {
  render: (args) => <Menu {...args} />
}

export const Logged: StoryObj<MenuProps> = {
  render: (args) => <Menu {...args} />,
  args: {
    username: 'John Doe'
  }
}
