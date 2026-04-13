import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Menu from '.'

const meta = {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof Menu>

export const Default: Story = {
  render: (args) => <Menu {...args} />
}

export const Logged: Story = {
  render: (args) => <Menu {...args} />,
  args: {
    username: 'John Doe'
  }
}
