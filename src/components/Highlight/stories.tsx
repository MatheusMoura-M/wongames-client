import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Highlight from '.'
import item from './mock'

const meta = {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} satisfies Meta<typeof Highlight>

export default meta
type Story = StoryObj<typeof Highlight>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}

export const WithFloatImage: Story = {
  args: {
    floatImage: '/img/red-dead-float.png'
  },
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}
