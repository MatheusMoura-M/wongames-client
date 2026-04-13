import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Heading from '.'

const meta = {
  title: 'Main/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
      control: 'text'
    }
  },
  args: {
    children: 'Most Populars',
    color: 'black'
  }
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {}
