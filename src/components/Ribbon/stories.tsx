import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Ribbon from '.'

const meta = {
  title: 'Ribbon',
  component: (args) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args} />
    </div>
  )
} satisfies Meta<typeof Ribbon>

export default meta
type Story = StoryObj<typeof Ribbon>

export const Default: Story = {
  args: {
    children: 'Best Seller',
    color: 'secondary',
    size: 'normal'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
}
