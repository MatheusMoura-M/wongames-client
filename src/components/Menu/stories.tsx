import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Menu, { MenuProps } from '.'

const meta = {
  title: 'Main/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<MenuProps>

export default meta
type Story = StoryObj<MenuProps>

export const Default: Story = {
  render: () => <Menu />
}

export const Logged: Story = {
  args: {
    username: 'John Doe'
  },
  render: (args) => <Menu {...args} />
}
