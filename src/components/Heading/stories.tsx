import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Heading, { HeadingProps } from '.'

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
} satisfies Meta<HeadingProps>

export default meta
type Story = StoryObj<HeadingProps>

export const Default: Story = {}
