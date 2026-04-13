import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ProfileMenu from '.'

const meta = {
  title: 'Profile/ProfileMenu',
  component: ProfileMenu,
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof ProfileMenu>

export default meta
type Story = StoryObj<typeof ProfileMenu>

export const Default: Story = {
  render: (args) => <ProfileMenu {...args} />
}
