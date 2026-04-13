import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Dropdown from '.'

const meta = {
  title: 'Main/Dropdown',
  component: Dropdown,
  argTypes: {
    title: {
      type: 'string',
      control: 'text'
    },
    children: {
      type: 'string',
      control: 'text'
    }
  },
  args: {
    title: 'Click here',
    children: 'content'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  render: (args) => <Dropdown {...args} />
}
