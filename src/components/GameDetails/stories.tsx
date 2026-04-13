import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import GameDetails from '.'
import mockGame from './mock'

// ATENÇÃOO
const meta = {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: mockGame,
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
      control: {
        type: 'inline-check'
      },
      options: ['Role-playing', 'Narrative']
    }
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof GameDetails>

export default meta
type Story = StoryObj<typeof GameDetails>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails {...args} />
    </div>
  )
}
