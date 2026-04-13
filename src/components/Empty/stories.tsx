import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Empty, { EmptyProps } from '.'

const meta = {
  title: 'Main/Empty',
  component: Empty,
  argTypes: {
    title: {
      type: 'string',
      control: 'text'
    },
    description: {
      type: 'string',
      control: 'text'
    },
    hasLink: {
      type: 'boolean',
      control: 'boolean'
    }
  },
  args: {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<EmptyProps>

export default meta
type Story = StoryObj<EmptyProps>

export const Default: Story = {}
