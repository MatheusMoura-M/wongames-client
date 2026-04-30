import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import GameDetails, { GameDetailsProps } from '.'
import mockGame from './mock'

const meta = {
  title: 'Game/GameDetails',
  component: GameDetails,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check'
      },
      options: ['windows', 'linux', 'mac']
    },
    genres: {
      control: 'object'
    }
  },
  args: mockGame,
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<GameDetailsProps>

export default meta
type Story = StoryObj<GameDetailsProps>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails {...args} />
    </div>
  )
}
