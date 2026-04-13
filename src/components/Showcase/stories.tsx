import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Showcase from '.'

const meta = {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof Showcase>

export default meta
type Story = StoryObj<typeof Showcase>

export const Default: Story = {
  render: (args) => <Showcase {...args} />,
  args: {
    title: 'Most Popular',
    highlight: highlightMock,
    games: gamesMock
  }
}

export const WithoutHighlight: Story = {
  render: (args) => <Showcase {...args} />,
  args: {
    title: 'Most Popular',
    games: gamesMock
  }
}

export const WithoutGames: Story = {
  render: (args) => <Showcase {...args} />,
  args: {
    title: 'Most Popular',
    highlight: highlightMock
  }
}
