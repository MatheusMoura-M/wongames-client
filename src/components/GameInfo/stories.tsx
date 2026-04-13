import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import GameInfo from '.'
import mockGame from './mock'

const meta = {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: mockGame,
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof GameInfo>

export default meta
type Story = StoryObj<typeof GameInfo>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
      <GameInfo {...args} />
    </div>
  )
}
