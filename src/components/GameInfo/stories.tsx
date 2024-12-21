import { Meta, StoryObj } from '@storybook/react'
import mockGame from './mock'

import GameInfo, { GameInfoProps } from '.'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame
} as Meta

export const Default: StoryObj<GameInfoProps> = {
  render: (args) => (
    <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
      <GameInfo {...args} />
    </div>
  )
}
