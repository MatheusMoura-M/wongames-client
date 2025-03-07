
import { Meta, StoryObj } from '@storybook/react'
import Showcase, { ShowcaseProps } from '.'
import highlightMock from '@/components/Highlight/mock'
import gamesMock from '@/components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story/>
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<ShowcaseProps> = {
  render: (args) => <Showcase {...args} />,
  args:  {
    title: 'Most Popular',
    highlight: highlightMock,
    games: gamesMock
  }
}

export const WithoutHighlight: StoryObj<ShowcaseProps> = {
  render: (args) => (
    <Showcase {...args} />
  ),
  args:  {
    title: 'Most Popular',
    games: gamesMock
  }
}

export const WithoutGames: StoryObj<ShowcaseProps> = {
  render: (args) => (
    <Showcase {...args} />
  ),
  args: {
    title: 'Most Popular',
    highlight: highlightMock
  }
}
