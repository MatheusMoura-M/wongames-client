import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import GameCard from '.'

const meta = {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/red-dead-img.jpg',
    price: 235,
    promotionalPrice: 215
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof GameCard>

export default meta
type Story = StoryObj<typeof GameCard>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const WithRibbon: Story = {
  args: {
    ribbon: '20% OFF',
    ribbonSize: 'small',
    ribbonColor: 'primary'
  },
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}
