import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Heading from '.'

const meta = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Most Populars',
    color: 'black'
  }
}
