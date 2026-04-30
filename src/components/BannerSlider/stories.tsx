import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import BannerSlider, { BannerSliderProps } from '.'
import items from './mock'

const meta = {
  title: 'Main/BannerSlider',
  component: BannerSlider,
  argTypes: {
    items: {
      control: 'object'
    }
  },
  args: { items },
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<BannerSliderProps>

export default meta
type Story = StoryObj<BannerSliderProps>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  )
}
