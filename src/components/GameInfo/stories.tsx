import { CartContextData } from '@/hooks/use-cart'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import GameInfo, { GameInfoProps } from '.'
import mockGame from './mock'

const meta = {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: mockGame,
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<GameInfoProps>

export default meta
type Story = StoryObj<GameInfoProps & CartContextData>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
      <GameInfo {...args} />
    </div>
  )
}

export const IsInCart: Story = {
  args: {
    isInCart: () => true
  },
  render: (args) => (
    <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
      <GameInfo {...args} />
    </div>
  )
}
