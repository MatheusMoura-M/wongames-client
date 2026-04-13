import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import UserDropdown from '.'

const meta = {
  title: 'UserDropdown',
  component: UserDropdown,
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof UserDropdown>

export default meta
type Story = StoryObj<typeof UserDropdown>

export const Default: Story = {
  render: (args) => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <UserDropdown {...args} />
    </div>
  ),
  args: {
    username: 'Willian'
  }
}
