import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Showcase, { ShowcaseProps } from '.'

const meta = {
  title: 'Main/Showcase',
  component: Showcase,
  args: {
    title: 'Most Popular'
  },
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
} satisfies Meta<ShowcaseProps>

export default meta
type Story = StoryObj<ShowcaseProps>

export const Default: Story = {
  args: {
    highlight: highlightMock,
    games: gamesMock
  },
  render: (args) => <Showcase {...args} />
}

export const WithoutHighlight: Story = {
  args: {
    games: gamesMock
  },
  render: (args) => <Showcase {...args} />
}

export const WithoutGames: Story = {
  args: {
    highlight: highlightMock
  },
  render: (args) => <Showcase {...args} />
}
