import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Main from '.'

const meta = {
  title: 'Main/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Main>

export default meta
type Story = StoryObj<typeof Main>

export const Default: Story = {}

export const Basic: Story = {
  args: {
    title: 'title basic',
    description: 'description basic'
  }
}
