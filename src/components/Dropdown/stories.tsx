import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Dropdown, { DropdownProps } from '.'

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
} satisfies Meta<DropdownProps>

export default meta
type Story = StoryObj<DropdownProps>

export const Default: Story = {
  render: (args) => <Dropdown {...args} />
}
