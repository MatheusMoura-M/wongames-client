import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Highlight, { HighlightProps } from '.'
import item from './mock'

const meta = {
  title: 'Main/Highlight',
  component: Highlight,
  args: { ...item }
} satisfies Meta<HighlightProps>

export default meta
type Story = StoryObj<HighlightProps>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}

export const WithFloatImage: Story = {
  args: {
    floatImage: '/img/red-dead-float.png',
    alignment: 'left'
  },
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}
