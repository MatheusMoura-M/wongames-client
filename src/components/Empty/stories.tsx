import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Empty from '.'

const meta = {
  title: 'Empty',
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
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof Empty>

export const Default: Story = {}
