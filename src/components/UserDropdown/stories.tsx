import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import UserDropdown, { UserDropdownProps } from '.'

const meta = {
  title: 'Main/UserDropdown',
  component: UserDropdown,
  args: {
    username: 'Willian'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<UserDropdownProps>

export default meta
type Story = StoryObj<UserDropdownProps>

export const Default: Story = {
  render: (args) => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <UserDropdown {...args} />
    </div>
  )
}
