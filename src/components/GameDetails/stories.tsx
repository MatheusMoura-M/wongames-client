
import { Meta, StoryObj } from '@storybook/react'
import GameDetails from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails platforms={['windows', 'linux', 'mac']} />
    </div>
  )
}
