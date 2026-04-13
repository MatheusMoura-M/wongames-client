import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ProfileMenu, { ProfileMenuProps } from '.'

const meta = {
  title: 'Profile/ProfileMenu',
  component: ProfileMenu,
  argTypes: {
    activeLink: {
      type: 'string',
      control: 'text'
    }
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<ProfileMenuProps>

export default meta
type Story = StoryObj<ProfileMenuProps>

export const Default: Story = {
  render: (args) => <ProfileMenu {...args} />
}
