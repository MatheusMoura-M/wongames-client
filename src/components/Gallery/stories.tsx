import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Gallery from '.'
import items from './mock'

const meta = {
  title: 'Gallery',
  component: Gallery,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof Gallery>

export default meta
type Story = StoryObj<typeof Gallery>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Gallery {...args} />
    </div>
  )
}
