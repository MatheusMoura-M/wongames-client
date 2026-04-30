import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Logo, { LogoProps } from '.'

const meta = {
  title: 'Main/Logo',
  component: Logo,
  args: {
    color: 'white',
    size: 'normal'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<LogoProps>

export default meta
type Story = StoryObj<LogoProps>

export const Default: Story = {}
