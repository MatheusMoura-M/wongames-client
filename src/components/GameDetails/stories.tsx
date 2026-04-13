import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import GameDetails from '.'
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
