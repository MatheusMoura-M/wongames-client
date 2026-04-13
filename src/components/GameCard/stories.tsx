import { CartContextData } from '@/hooks/use-cart'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { action } from 'storybook/actions'
import GameCard, { GameCardProps } from '.'

const meta = {
  title: 'Main/GameCard',
  component: GameCard,
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/red-dead-img.jpg',
    price: 235,
    promotionalPrice: 215,
    onFav: action('on-click')
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<GameCardProps & CartContextData>

export default meta
type Story = StoryObj<GameCardProps & CartContextData>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const IsInCart: Story = {
  args: {
    isInCart: () => true
  },
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
