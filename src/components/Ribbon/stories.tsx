import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Ribbon, { RibbonProps } from '.'

const meta = {
  title: 'Main/Ribbon',
  argTypes: {
    color: {
      type: 'string',
      control: 'select',
      options: ['primary', 'secondary']
    },
    size: {
      type: 'string',
      control: 'select',
      options: ['normal', 'small']
    }
  },
  args: {
    children: 'Best Seller',
    color: 'secondary',
    size: 'normal'
  },
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
} satisfies Meta<RibbonProps>

export default meta
type Story = StoryObj<RibbonProps>

export const Default: Story = {}
