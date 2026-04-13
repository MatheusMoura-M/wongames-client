import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Logo from '.'

const meta = {
  title: 'Logo',
  component: Logo,
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {}
