import { Meta, StoryObj } from '@storybook/react'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'Profile/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<ProfileMenuProps> = {
  render: (args) => <ProfileMenu {...args} />
}
