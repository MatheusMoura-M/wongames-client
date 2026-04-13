import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import GameCardSlider from '.'
import items from './mock'

const meta = {
  title: 'Main/GameCardSlider',
  component: GameCardSlider,
  args: {
    items: items,
    color: 'white'
  },
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof GameCardSlider>

export default meta
type Story = StoryObj<typeof GameCardSlider>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider {...args} />
    </div>
  )
}
