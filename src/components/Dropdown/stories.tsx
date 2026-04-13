import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Dropdown from '.'

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  render: (args) => <Dropdown {...args} />,
  args: {
    title: 'Click here',
    children: 'content'
  }
}
